import { BaseService } from "../services/BaseService";

export abstract class BaseCadastroController<T, Y extends BaseService> {

  public nome: string;
  public entity: T;
  public viewIndexTab: number = 1;
  protected editar = false;
  public erros = {};
  constructor(protected service: Y, protected $scope, protected $route, protected $location) {
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
      this.erros = null;
      this.$scope.$emit('erros', null);
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
    this.updateLoading(true);
    this.service.save(this.entity)
      .then((resultado: any) => this.saveTry(resultado))
      .catch(error => this.errorMessage(error));
  }

  private errorMessage(errorResponse: any): any {
    this.erros = {};
    this.$scope.$emit('erroMessage', null);
    if (errorResponse.data && Array.isArray(errorResponse.data)) {
      for (let erro of (<{ property: string; message: string }[]>errorResponse.data)) {
        this.erros[erro.property] = erro.message;
      }
      this.$scope.$emit('erros', this.erros);
    } else  if (errorResponse.data && !Array.isArray(errorResponse.data)) {
      this.$scope.$emit('erroMessage', errorResponse.data);
    }else {
      this.$scope.$emit('erroMessage', errorResponse.message);
    }
    this.updateLoading(false);
  }

  public viewEditar() {
    this.updateLoading(true);
    this.service.update(this.entity)
      .then((resultado: any) => this.saveTry(resultado))
      .catch(error => this.errorMessage(error));
  }

  $doCheck() {
    
  }

  saveTry(resultado) {
    if (resultado.status == 200) {
      this.erros = null;
      this.$scope.$emit('identificacao', resultado.data.id);
      this.$scope.$emit('erros', { succes: true });
      this.$scope.$emit('erroMessage', null);
      this.$location.path(this.$location.path().replace("cadastro", "editacao"));
    }
    this.updateLoading(false);
  }

  protected updateLoading(loading: boolean) {
    this.$scope.$emit('loading', loading);
  }
}