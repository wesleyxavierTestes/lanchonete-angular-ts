import { ClienteService } from './../../services/cliente/ClienteService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';
import { MascaraSet } from '../../utils/Mascaras';

export class ClienteCadastroController extends BaseCadastroController<any, ClienteService> {

    static $inject = ['ClienteService', '$scope', '$route', '$location'];

    rota = 'Cliente';
    public tiposPessoa = [{ key: 'Pessoa Física', value: 'Fisica' }, { key: 'Pessoa Jurídica', value: 'Juridica' }];

    constructor(protected clienteService: ClienteService, protected $scope, protected $route, protected $location) {
        super(clienteService, $scope, $route, $location);
        this.nome = 'Cliente';
    }

    get isPessoaFisica() {
        const tipoPessoa = this.entity.tipoPessoa;
        return tipoPessoa == 'Fisica';
    }

    protected updateComponent() {
        this.configureCpfCnpj();
    }

    public configureCpfCnpj() {
        MascaraSet.rg();
        MascaraSet.cep();
        MascaraSet.cpf();
        MascaraSet.cnpj();
    }

    viewEvento(event) {
        this.rota = event;
        this.$scope.$apply();
    }
}
sglanchoneteApp.controller('ClienteCadastroController', ClienteCadastroController);
