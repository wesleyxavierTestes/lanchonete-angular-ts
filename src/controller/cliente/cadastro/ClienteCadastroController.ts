import { ClienteService } from './../../../services/cliente/ClienteService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { MascaraSet } from '../../../utils/Mascaras';
import { CreateCustomUtils } from '../../../utils/CreateCustomUtils';
import { ClienteModel } from '../../../models/cliente/ClienteModel';
import { EnderecoModel } from '../../../models/cliente/EnderecoModel';
 
export class ClienteCadastroController extends BaseCadastroController<ClienteModel, ClienteService> {

    static $inject = ['ClienteService', '$rootScope', '$state', '$location'];

    rota = 'Cliente';
    public tiposPessoa = [{ key: 'Pessoa Física', value: 'Fisica' }, { key: 'Pessoa Jurídica', value: 'Juridica' }];
    enderecoB: EnderecoModel;
    enderecoA: EnderecoModel;

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

        CreateCustomUtils.EventListener('input-cep', 'customcepchange', (event: CustomEvent) => {
            if (!this.entity.endereco) this.entity.endereco = new EnderecoModel();
            this.entity.endereco.cep = event.detail;
            this.$rootScope.$apply();
        });

        CreateCustomUtils.EventListener('input-cep', 'customenderecocep', (event: CustomEvent) => {
            alert(JSON.stringify(event.detail));
            this.entity.endereco = event.detail;
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


