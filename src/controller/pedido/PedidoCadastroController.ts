import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class PedidoCadastroController extends BaseCadastroController<any> {
    static $inject = ['PedidoService', '$scope'];

    constructor(protected pedidoService, protected $scope) {
        super(pedidoService, $scope);
        this.nome = 'Pedido';
    }

}
sglanchoneteApp.controller('PedidoCadastroController', PedidoCadastroController);