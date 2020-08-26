import { LancheService } from './../../../services/lanche/LancheService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { IpaginateConfigure, Paginacao } from '../../../components/paginacao/paginacao';
import { ProdutoService } from '../../../services/produto/ProdutoService';
import { LancheModel } from '../../../models/lanche/LancheModel';

export class LancheCadastroController extends BaseCadastroController<LancheModel, LancheService> {
    static $inject = ['LancheService', '$rootScope', '$state', '$location', 'ProdutoService'];
    public produtos: any[];

    public paginacaoConfig: IpaginateConfigure = Paginacao.default;

    constructor(protected lancheService: LancheService, protected $rootScope, protected state, protected $location, private podutoService: ProdutoService) {
        super(lancheService, $rootScope, state, $location);
        this.nome = 'Lanche';
        this.viewProdutoFindAll();
    }
    protected updateComponent() { }

    public viewPaginacaoChange(even: IpaginateConfigure) {
        this.paginacaoConfig = even;
        this.paginacaoFindAll();
    }

    private paginacaoFindAll() {
        if (!Paginacao.valido(this.paginacaoConfig)) return;
        this.viewProdutoFindAll();
    }

    public viewProdutoFindAll() {
        this.$rootScope.$emit('loading', true);
        this.podutoService.findAll(this.paginacaoConfig.pageAtual)
            .then((resultado: any) => this.findAllTry(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }

    protected findAllTry(resultado: {
        data: {
            content: Array<any>;
            totalElements: number; totalPages: number;
            first: boolean; last: boolean;
        };
    }) {
        this.produtos = resultado.data.content;
        this.paginacaoConfig = Paginacao.configure(resultado.data, this.paginacaoConfig.pageAtual);
        this.$rootScope.$emit('loading', false);
    }
}
sglanchoneteApp.component('lanchecadastro',
    {
        controller: LancheCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./lanche.cadastro.html')
    });