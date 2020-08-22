import { VendaService } from './../../../services/venda/VendaService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class VendaListController extends BaseListController<any, VendaService> {
    static $inject = ['VendaService', '$rootScope'];

    constructor(protected vendaService, protected $rootScope) {
        super(vendaService, $rootScope);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.component('vendalist', 
{
    controller: VendaListController,
    controllerAs: 'view',
    template: require('./venda.list.html')
});