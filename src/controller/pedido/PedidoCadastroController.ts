import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class PedidoCadastroController extends BaseCadastroController<any> {
    static $inject = ['PedidoService', '$scope', '$route'];

    constructor(protected pedidoService, protected $scope, protected $route) {
        super(pedidoService, $scope, $route);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.controller('PedidoCadastroController', PedidoCadastroController);