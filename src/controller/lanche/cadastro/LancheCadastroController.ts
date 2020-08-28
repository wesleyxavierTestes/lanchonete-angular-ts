import { LancheService } from './../../../services/lanche/LancheService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { IpaginateConfigure, Paginacao } from '../../../components/paginacao/paginacao';
import { ProdutoService } from '../../../services/produto/ProdutoService';
import { LancheModel } from '../../../models/lanche/LancheModel';
import { ProdutoModel } from '../../../models/produto/ProdutoModel';
import { IngredienteModel } from '../../../models/lanche/IngredienteModel';
import numeral from 'numeral';


export class LancheCadastroController extends BaseCadastroController<LancheModel, LancheService> {
    static $inject = ['LancheService', '$rootScope', '$state', '$location', 'ProdutoService'];
    public produtos: ProdutoModel[];

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

    public viewRemoverItem(id: number) {
        if (this.entity.ingredientesLanche && Array.isArray(this.entity.ingredientesLanche)) {
            this.entity.ingredientesLanche = this.entity.ingredientesLanche.filter(item => item.id !== id);
        }
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

    public viewSelecionarProduto(index: number) {
        if (!this.entity.ingredientesLanche || !Array.isArray(this.entity.ingredientesLanche)) this.entity.ingredientesLanche = [];
        const produto = this.produtos[index] as any;
        this.entity.ingredientesLanche.push((<IngredienteModel>produto));

        this.entity.valor =
            this.entity.ingredientesLanche
            .reduce((valor, update) => numeral(valor).add(update.valor).value(), 0);

    }

    public contarQuantidade(id) {
        if (this.entity.ingredientesLanche && Array.isArray(this.entity.ingredientesLanche))
            return this.entity.ingredientesLanche.filter(ingrediente => ingrediente.id == id).length;
        return [];
    }

    public ingredientesLancheFilter() {
        if (this.entity.ingredientesLanche && Array.isArray(this.entity.ingredientesLanche))
            return this.entity.ingredientesLanche.filter((value, index, self) => self.indexOf(value) === index);

        return [];
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