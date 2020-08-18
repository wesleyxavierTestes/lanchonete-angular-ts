import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class PedidoCadastroController extends BaseCadastroController<any> {
    static $inject = ['PedidoService'];

    constructor(protected pedidoService) {
        super(pedidoService);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.controller('PedidoCadastroController', PedidoCadastroController);