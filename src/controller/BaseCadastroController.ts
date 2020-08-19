import { BaseService } from "../services/BaseService";

export abstract class BaseCadastroController<T, Y extends BaseService> {

  public nome: string;
  public entity: T;
  public viewIndexTab: number = 1;
  protected editar = false;
  public erros = {};

  constructor(protected service: Y, protected $scope, protected $route) {
    this.onChange($route);
    this.onInit();
    $scope.$watch('form', function (v) {
      if (!v) { return }
      this.updateView();
    })
  }

  protected abstract updateComponent();

  public onChange($route: any) {
    this.entity = $route.current.locals.find.data;
    this.editar = $route.current.locals.editar;
  }

  public updateViewBase() {
    setTimeout(() => {
      this.updateComponent();
      this.erros = {};
    }, 25);
  }

  public onInit() {
    this.updateViewBase();
  }

  public viewSetTab(index: number) {
    this.viewIndexTab = parseInt(index.toString());
  }

  public formSubmit() {
    this.editar ? this.viewEditar() : this.viewSalvar();
  }

  public viewSalvar() {
    this.$scope.$emit('loading', true);
    this.service.save(this.entity)
      .then((resultado: any) => this.saveTry(resultado))
      .catch(error => this.errorMessage(error));
  }

  private errorMessage(errorResponse: any): any {
    this.erros = {};
    for (let erro of (<{ property: string; message: string }[]>errorResponse.data)) {
      this.erros[erro.property] = erro.message;
    }
    this.$scope.$emit('loading', false);
  }

  public viewEditar() {
    this.$scope.$emit('loading', true);
    this.service.update(this.entity)
      .then((resultado: any) => this.saveTry(resultado))
      .catch(error => this.errorMessage(error));
  }

  saveTry(resultado: Response) {
    if (resultado.status == 200) {
      this.erros = undefined;
    }
    this.$scope.$emit('loading', false)
  }
}