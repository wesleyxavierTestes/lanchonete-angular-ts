import { PedidoService } from './../../../services/pedido/PedidoService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { PedidoModel } from '../../../models/pedido/PedidoModel';

export class PedidoCadastroController extends BaseCadastroController<PedidoModel, PedidoService> {
    static $inject = ['PedidoService', '$rootScope', '$state', '$location'];

    constructor(protected pedidoService: PedidoService, protected $rootScope, protected state, protected $location) {
        super(pedidoService, $rootScope, state, $location);
        this.nome = 'Pedido';
    }
    protected updateComponent() { }
}
sglanchoneteApp.component('pedidocadastro',
    {
        controller: PedidoCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./pedido.cadastro.html')
    });