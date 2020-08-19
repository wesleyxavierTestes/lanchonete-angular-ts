export abstract class BaseCadastroController<T> {

    public nome: string;
    public entity: T;
    public viewIndexTab: number = 1;
    protected editar = false;

    constructor(protected service, protected $scope, protected $route) {
      this.entity = $route.current.locals.find.data;
      this.editar = $route.current.locals.editar;
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