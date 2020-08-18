import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class PedidoCadastroController extends BaseCadastroController<any> {
    static $inject = ['PedidoService', '$rootScope'];

    constructor(protected pedidoService, protected $rootScope) {
        super(pedidoService, $rootScope);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.controller('PedidoCadastroController', PedidoCadastroController);