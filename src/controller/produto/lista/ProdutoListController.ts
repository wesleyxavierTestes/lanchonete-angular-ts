import { ProdutoService } from './../../../services/produto/ProdutoService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class ProdutoListController extends BaseListController<any, ProdutoService> {
    static $inject = ['ProdutoService', '$rootScope'];

    constructor(protected podutoService, protected $rootScope) {
        super(podutoService, $rootScope);
        this.nome = 'Produto';
    }
}
sglanchoneteApp.component('produtolist',
{
    controller: ProdutoListController,
    controllerAs: 'view',
    template: require('./produto.list.html')
});