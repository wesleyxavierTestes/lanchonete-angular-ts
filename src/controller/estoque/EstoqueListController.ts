import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class EstoqueListController extends BaseListController<any> {
    static $inject = ['EstoqueService'];

    constructor(protected estoqueService) {
        super(estoqueService);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.controller('EstoqueListController', EstoqueListController);