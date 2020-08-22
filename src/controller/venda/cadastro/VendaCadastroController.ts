import { VendaService } from './../../../services/venda/VendaService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class VendaCadastroController extends BaseCadastroController<any, VendaService> {
    static $inject = ['VendaService', '$rootScope', '$state', '$location'];

    constructor(protected vendaService: VendaService, protected $rootScope, protected state, protected $location) {
        super(vendaService, $rootScope, state, $location);
        this.nome = 'Venda';
     }
    protected updateComponent() {}
}
sglanchoneteApp.component('vendacadastro',  
{
    controller: VendaCadastroController,
    controllerAs: 'view',
    template: require('./venda.cadastro.html')
});