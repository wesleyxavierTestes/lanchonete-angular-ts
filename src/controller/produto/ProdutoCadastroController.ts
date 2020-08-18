import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class ProdutoCadastroController extends BaseCadastroController<any> {
    static $inject = ['ProdutoService', '$scope'];

    constructor(protected podutoService, protected $scope) {
        super(podutoService, $scope);
        this.nome = 'Produto';
    }

}
sglanchoneteApp.controller('ProdutoCadastroController', ProdutoCadastroController);