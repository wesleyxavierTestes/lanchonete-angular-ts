export abstract class BaseCadastroController<T> {

    public nome: string;
    public entity: T;
    protected editar = false;

    constructor(protected service, protected $scope) {
      this.entity = $scope.$resolve.entity.data;
      this.editar = $scope.$resolve.editar;
    }

    public viewSalvar() {
      alert(this.editar)
    }
}