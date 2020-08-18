import { PedidoService } from './../../services/pedido/PedidoService';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class PedidoListController extends BaseListController<any, PedidoService> {
    static $inject = ['PedidoService', '$rootScope'];

    constructor(protected pedidoService, protected $rootScope) {
        super(pedidoService, $rootScope);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.controller('PedidoListController', PedidoListController);