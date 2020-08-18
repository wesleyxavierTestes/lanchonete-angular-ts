import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class ProdutoCadastroController extends BaseCadastroController<any> {
    static $inject = ['ProdutoService'];

    constructor(protected podutoService) {
        super(podutoService);
        this.nome = 'Produto';
    }

}
sglanchoneteApp.controller('ProdutoCadastroController', ProdutoCadastroController);