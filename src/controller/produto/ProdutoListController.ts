import { ProdutoService } from './../../services/produto/ProdutoService';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class ProdutoListController extends BaseListController<any, ProdutoService> {
    static $inject = ['ProdutoService', '$rootScope'];

    constructor(protected podutoService, protected $rootScope) {
        super(podutoService, $rootScope);
        this.nome = 'Produto';
    }

}
sglanchoneteApp.controller('ProdutoListController', ProdutoListController);