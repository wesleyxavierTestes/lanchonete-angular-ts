import { ClienteService } from './../../services/cliente/ClienteService';
import { Paginacao } from './../../components/paginacao/paginacao';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

export class ClienteListController extends BaseListController<any, ClienteService> {
    static $inject = ['ClienteService', '$scope'];

    pesquisaModel = '';

    constructor(protected clienteService, protected $scope) {
        super(clienteService, $scope);
        this.nome = 'Cliente';
    }

    public viewAtivacao(event: boolean, id: number) {
        this.$scope.$emit('loading', true);
        if (event) {
            this.service.active(id)
                .then((resultado: any) => setTimeout(() => {
                    this.viewFindAll()
                }, 100))
                .finally(() => this.$scope.$emit('loading', false));
        } else { 
            this.service.desactive(id)
            .then((resultado: any) => setTimeout(() => {
                this.viewFindAll()
            }, 100))
            .finally(() => this.$scope.$emit('loading', false));
        }
    }

    public viewPesquisarNome(pesquisa) {
        this.pesquisaModel = pesquisa;
        this.$scope.$emit('loading', true);
        this.paginacaoConfig = Paginacao.default;
        this.service.findAllFilter(this.paginacaoConfig.pageAtual, { nome: this.pesquisaModel })
            .then((resultado: any) => this.findAllTry(resultado));
    }
}
sglanchoneteApp.controller('ClienteListController', ClienteListController);
