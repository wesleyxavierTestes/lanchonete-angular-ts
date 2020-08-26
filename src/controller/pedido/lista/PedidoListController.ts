import { PedidoService } from './../../../services/pedido/PedidoService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { PedidoModel } from '../../../models/pedido/PedidoModel';

export class PedidoListController extends BaseListController<PedidoModel, PedidoService> {
    static $inject = ['PedidoService', '$rootScope'];

    constructor(protected pedidoService, protected $rootScope) {
        super(pedidoService, $rootScope);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.component('pedidolist', 
{
    controller: PedidoListController,
    controllerAs: 'view',
    template: require('./pedido.list.html')
});