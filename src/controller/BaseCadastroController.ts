export abstract class BaseCadastroController<T> {

    public nome: string;
    public entity: T;
    public viewIndexTab: number = 1;
    protected editar = false;

    constructor(protected service, protected $scope) {
      this.entity = $scope.$resolve.entity.data;
      this.editar = $scope.$resolve.editar;
    }

    public viewSetTab(index: number) {
      this.viewIndexTab = parseInt(index.toString());
    }

    public viewSalvar() {
      alert('Salvar')
    }

    public viewEditar() {
      alert('editar')
    }
}