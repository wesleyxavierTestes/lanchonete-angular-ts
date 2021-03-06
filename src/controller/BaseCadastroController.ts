import { EntityBase } from './../models/BaseModel';
import { BaseService } from "../services/BaseService";

export abstract class BaseCadastroController<T extends EntityBase, Y extends BaseService<T>> {

  public nome: string;
  public entity: T;
  public viewIndexTab: number = 1;
  protected editar = false;
  protected navegaEditar = true;
  public erros = {};

  constructor(protected service: Y, protected $rootScope, protected $scope, protected $state, protected $location) {
    $rootScope.$watch('form', function (v) {
      if (!v) { return }
      this.updateView();
    })
  }

  public updateView() {
    this.$rootScope.$apply();
  }

  protected abstract updateComponent();

  public updateViewBase() {
    setTimeout(() => {
      this.updateComponent();
      this.erros = null;
      this.$rootScope.$emit('erros', null);
    }, 25);
  }

  public $onInit() {
    this.updateViewBase();
  }

  public viewSetTab(index: number) {
    this.viewIndexTab = parseInt(index.toString());
  }

  public formSubmit() {
    this.editar ? this.viewEditar() : this.viewSalvar();
  }

  public viewSalvar(tipo?: string) {
    this.updateLoading(true);
    this.service.save(this.entity, tipo)
      .then((resultado) => !resultado.Notifications ? this.saveTry(resultado) : this.errorMessage(resultado.Notifications));
  }

  protected errorMessage(errorResponse: any): any {
    this.erros = {};
    this.$rootScope.$emit('erroMessage', null);
    if (errorResponse && Array.isArray(errorResponse)) {
      for (let erro of (<{ property: string; message: string }[]>errorResponse)) {
        this.erros[erro.property] = erro.message;
      }
      this.$rootScope.$emit('erros', this.erros);
    } else if (errorResponse && !Array.isArray(errorResponse)) {
      this.$rootScope.$emit('erroMessage', errorResponse);
    } else {
      this.$rootScope.$emit('erroMessage', errorResponse.message);
    }
    this.updateLoading(false);
  }

  public viewEditar(tipo?: string) {
    this.updateLoading(true);
    this.service.update(this.entity, tipo)
      .then((resultado) => !resultado.Notifications ? this.saveTry(resultado) : this.errorMessage(resultado.Notifications));
  }

  $doCheck() {

  }

  saveTry(resultado: T) {
    this.erros = null;

    this.$rootScope.$emit('identificacao', (<any>resultado).id);
    this.$rootScope.$emit('erros', { succes: true });
    this.$rootScope.$emit('erroMessage', null);

    const roraEdicao = (this.navegaEditar)
      ? this.$state.$current.name.replace("cadastro", "edicao")
      : this.$state.$current.name.replace("cadastro", "list");

    this.$state.go(roraEdicao);
    this.updateLoading(false);
  }

  protected updateLoading(loading: boolean) {
    this.$rootScope.$emit('loading', loading);
  }
}