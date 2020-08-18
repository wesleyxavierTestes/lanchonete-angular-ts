export abstract class BaseCadastroController<T> {

    public nome: string;
    
    constructor(protected service, protected $rootScope) {
        $rootScope.$emit('loading', false);
    }
}