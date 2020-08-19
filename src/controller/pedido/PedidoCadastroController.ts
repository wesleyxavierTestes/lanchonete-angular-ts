import { PedidoService } from './../../services/pedido/PedidoService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class PedidoCadastroController extends BaseCadastroController<any, PedidoService> {
    static $inject = ['PedidoService', '$scope', '$route'];

    constructor(protected pedidoService: PedidoService, protected $scope, protected $route) {
        super(pedidoService, $scope, $route);
        this.nome = 'Pedido';
     }
    protected updateComponent() {}
}
sglanchoneteApp.controller('PedidoCadastroController', PedidoCadastroController);