import { ClienteService } from './../../../services/cliente/ClienteService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { MascaraSet } from '../../../utils/Mascaras';
import { CreateCustomUtils } from '../../../utils/CreateCustomUtils';
 
export class ClienteCadastroController extends BaseCadastroController<any, ClienteService> {

    static $inject = ['ClienteService', '$rootScope', '$state', '$location'];

    rota = 'Cliente';
    public tiposPessoa = [{ key: 'Pessoa Física', value: 'Fisica' }, { key: 'Pessoa Jurídica', value: 'Juridica' }];

    constructor(protected clienteService: ClienteService,
        protected $rootScope, protected state, protected $location) {
        super(clienteService, $rootScope, state, $location);
        this.nome = 'Cliente';
    }

    get isPessoaFisica() {
        const tipoPessoa = this.entity.tipoPessoa;
        return tipoPessoa == 'Fisica';
    }

    protected updateComponent() {
        this.configureCpfCnpj();
        
        CreateCustomUtils.EventListener('input-rg', 'customrgchange', (event: CustomEvent) => {
            this.entity.rg = event.detail;
            this.$rootScope.$apply();
        });
    }

    public configureCpfCnpj() {
        MascaraSet.rg();
        MascaraSet.cep();
        MascaraSet.cpf();
        MascaraSet.cnpj();
    }
}
sglanchoneteApp.component('clientecadastro',
    {
        controller: ClienteCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./cliente.cadastro.html')
    });


