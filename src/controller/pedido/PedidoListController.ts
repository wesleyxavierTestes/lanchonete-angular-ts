import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class PedidoListController extends BaseListController<any> {
    static $inject = ['PedidoService', '$rootScope'];

    constructor(protected pedidoService, protected $rootScope) {
        super(pedidoService, $rootScope);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.controller('PedidoListController', PedidoListController);