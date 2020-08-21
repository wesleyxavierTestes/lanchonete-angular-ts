import { PedidoService } from './../../../services/pedido/PedidoService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class PedidoListController extends BaseListController<any, PedidoService> {
    static $inject = ['PedidoService', '$scope'];

    constructor(protected pedidoService, protected $scope) {
        super(pedidoService, $scope);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.component('pedidolist', 
{
    controller: PedidoListController,
    controllerAs: 'view',
    template: require('./pedido.list.html')
});