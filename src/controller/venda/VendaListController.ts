import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class VendaListController extends BaseListController<any> {
    static $inject = ['VendaService'];

    constructor(protected vendaService) {
        super(vendaService);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.controller('VendaListController', VendaListController);