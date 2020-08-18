import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class EstoqueCadastroController extends BaseCadastroController<any> {
    static $inject = ['EstoqueService', '$rootScope'];

    constructor(protected estoqueService, protected $rootScope) {
        super(estoqueService, $rootScope);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.controller('EstoqueCadastroController', EstoqueCadastroController);