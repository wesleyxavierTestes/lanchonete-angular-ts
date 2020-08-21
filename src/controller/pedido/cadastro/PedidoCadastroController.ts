import { PedidoService } from './../../../services/pedido/PedidoService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class PedidoCadastroController extends BaseCadastroController<any, PedidoService> {
    static $inject = ['PedidoService', '$scope', '$route', '$location'];

    constructor(protected pedidoService: PedidoService, protected $scope, protected $route, protected $location) {
        super(pedidoService, $scope, $route, $location);
        this.nome = 'Pedido';
     }
    protected updateComponent() {}
}
sglanchoneteApp.component('pedidocadastro',  
{
    controller: PedidoCadastroController,
    controllerAs: 'view',
    template: require('./pedido.cadastro.html')
});