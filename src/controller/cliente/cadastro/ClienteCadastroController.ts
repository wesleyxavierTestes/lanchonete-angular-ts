import { ICnpj } from './../../../models/ICnpj';
import { ClienteService } from './../../../services/cliente/ClienteService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { CreateCustomUtils } from '../../../utils/CreateCustomUtils';
import { ClienteModel } from '../../../models/cliente/ClienteModel';
import { EnderecoModel } from '../../../models/cliente/EnderecoModel';

export class ClienteCadastroController extends BaseCadastroController<ClienteModel, ClienteService> {

    static $inject = ['ClienteService', '$rootScope', '$scope', '$state', '$location'];

    rota = 'Cliente';
    public tiposPessoa = [{ key: 'Pessoa Física', value: 'Fisica' }, { key: 'Pessoa Jurídica', value: 'Juridica' }];
    enderecoB: EnderecoModel;
    enderecoA: EnderecoModel;

    constructor(protected clienteService: ClienteService,
        protected $rootScope, protected $scope, protected state, protected $location) {
        super(clienteService, $rootScope, $scope, state, $location);
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

        CreateCustomUtils.EventListener('input-cpf', 'customcpfchange', (event: CustomEvent) => {
            if (!this.entity.endereco) this.entity.endereco = new EnderecoModel();
            this.entity.cpf = event.detail;
            this.$rootScope.$apply();
        });

        CreateCustomUtils.EventListener('input-cnpj', 'customcnpjchange', (event: CustomEvent) => {
            if (!this.entity.endereco) this.entity.endereco = new EnderecoModel();
            this.entity.cnpj = event.detail;
            this.$rootScope.$apply();
        });

        CreateCustomUtils.EventListener('input-cnpj', 'customenderecocnpj', (event: CustomEvent<ICnpj>) => {
             this.entity.nome = event.detail.nome;
            this.$rootScope.$apply();
        });

        CreateCustomUtils.EventListener('input-cep', 'customcepchange', (event: CustomEvent) => {
            if (!this.entity.endereco) this.entity.endereco = new EnderecoModel();
            this.entity.endereco.cep = event.detail;
            this.$rootScope.$apply();
        });

        CreateCustomUtils.EventListener('input-cep', 'customenderecocep', (event: CustomEvent) => {
            this.updateLoading(!event.detail.cep);
            this.entity.endereco = event.detail;
            this.$rootScope.$apply();
        });
    }

    public configureCpfCnpj() {
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


