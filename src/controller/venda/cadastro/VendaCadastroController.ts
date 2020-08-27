import { VendaService } from './../../../services/venda/VendaService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { VendaModel } from '../../../models/venda/VendaModel';

export class VendaCadastroController extends BaseCadastroController<VendaModel, VendaService> {
    static $inject = ['VendaService', '$rootScope', '$state', '$location'];

    constructor(protected vendaService: VendaService, protected $rootScope, protected state, protected $location) {
        super(vendaService, $rootScope, state, $location);
        this.nome = 'Venda';
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
sglanchoneteApp.component('vendacadastro',
    {
        controller: VendaCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./venda.cadastro.html')
    });