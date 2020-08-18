import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class ProdutoListController extends BaseListController<any> {
    static $inject = ['ProdutoService'];

    constructor(protected podutoService) {
        super(podutoService);
        this.nome = 'Produto';
    }

}
sglanchoneteApp.controller('ProdutoListController', ProdutoListController);