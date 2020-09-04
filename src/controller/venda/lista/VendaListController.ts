import { VendaService } from './../../../services/venda/VendaService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { VendaModel } from '../../../models/venda/VendaModel';

export class VendaListController extends BaseListController<VendaModel, VendaService> {
    static $inject = ['VendaService', '$rootScope', '$scope'];

    constructor(protected vendaService, protected $rootScope, protected $scope) {
        super(vendaService, $rootScope, $scope);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.component('vendalist', 
{
    controller: VendaListController,
    controllerAs: 'view',
    template: require('./venda.list.html')
});