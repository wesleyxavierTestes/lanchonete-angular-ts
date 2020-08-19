import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class ProdutoCadastroController extends BaseCadastroController<any> {
    static $inject = ['ProdutoService', '$scope', '$route'];

    constructor(protected podutoService, protected $scope, protected $route) {
        super(podutoService, $scope, $route);
        this.nome = 'Produto';
    }

}
sglanchoneteApp.controller('ProdutoCadastroController', ProdutoCadastroController);