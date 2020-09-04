import { PedidoService } from './../../../services/pedido/PedidoService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { PedidoModel } from '../../../models/pedido/PedidoModel';

export class PedidoCadastroController extends BaseCadastroController<PedidoModel, PedidoService> {
    static $inject = ['PedidoService', '$rootScope', '$scope', '$state', '$location'];

    constructor(protected pedidoService: PedidoService, protected $rootScope, protected $scope, protected state, protected $location) {
        super(pedidoService, $rootScope, $scope, state, $location);
        this.nome = 'Pedido';
    }
    protected updateComponent() { }

    viewUpdateValor(event: string) {
        this.entity.valor = event;
    }

    viewUpdateValorDesconto(event: string) {
        this.entity.valorDesconto = event;
    }

    viewUpdateValorTotal(event: string) {
        this.entity.valorTotal = event;
    }
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