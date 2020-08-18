import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class PedidoListController extends BaseListController<any> {
    static $inject = ['PedidoService'];

    constructor(protected pedidoService) {
        super(pedidoService);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.controller('PedidoListController', PedidoListController);