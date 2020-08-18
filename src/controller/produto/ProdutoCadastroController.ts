import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class ProdutoCadastroController extends BaseCadastroController<any> {
    static $inject = ['ProdutoService', '$rootScope'];

    constructor(protected podutoService, protected $rootScope) {
        super(podutoService, $rootScope);
        this.nome = 'Produto';
    }

}
sglanchoneteApp.controller('ProdutoCadastroController', ProdutoCadastroController);