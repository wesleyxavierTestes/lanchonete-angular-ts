export abstract class BaseCadastroController<T> {

    public nome: string;
    public entity: T;

    constructor(protected service, protected $scope) {
      this.entity = $scope.$resolve.entity.data;
    }
}