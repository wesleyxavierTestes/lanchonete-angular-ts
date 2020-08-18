import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class VendaListController extends BaseListController<any> {
    static $inject = ['VendaService', '$rootScope'];

    constructor(protected vendaService, protected $rootScope) {
        super(vendaService, $rootScope);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.controller('VendaListController', VendaListController);