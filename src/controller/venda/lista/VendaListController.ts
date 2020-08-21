import { VendaService } from './../../../services/venda/VendaService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class VendaListController extends BaseListController<any, VendaService> {
    static $inject = ['VendaService', '$scope'];

    constructor(protected vendaService, protected $scope) {
        super(vendaService, $scope);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.component('vendalist', 
{
    controller: VendaListController,
    controllerAs: 'view',
    template: require('./venda.list.html')
});