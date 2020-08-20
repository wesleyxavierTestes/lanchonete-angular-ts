import { ProdutoService } from './../../services/produto/ProdutoService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class ProdutoCadastroController extends BaseCadastroController<any, ProdutoService> {
    static $inject = ['ProdutoService', '$scope', '$route', '$location'];

    constructor(protected podutoService: ProdutoService, protected $scope, protected $route, protected $location) {
        super(podutoService, $scope, $route, $location);
        this.nome = 'Produto';
     }
    protected updateComponent() {}
}
sglanchoneteApp.controller('ProdutoCadastroController', ProdutoCadastroController);