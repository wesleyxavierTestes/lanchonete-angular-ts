import { ProdutoService } from './../../../services/produto/ProdutoService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { ProdutoModel } from '../../../models/produto/ProdutoModel';

export class ProdutoListController extends BaseListController<ProdutoModel, ProdutoService> {
    static $inject = ['ProdutoService', '$rootScope', '$scope'];

    constructor(protected podutoService: ProdutoService, protected $rootScope, protected $scope) {
        super(podutoService, $rootScope, $scope);
        this.nome = 'Produto';
    }
}
sglanchoneteApp.component('produtolist',
{
    controller: ProdutoListController,
    controllerAs: 'view',
    template: require('./produto.list.html')
});