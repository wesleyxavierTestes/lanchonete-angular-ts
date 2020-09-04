import { CategoriaModel } from './../../../models/categoria/CategoriaModel';
import { CategoriaService } from './../../../services/categoria/CategoriaService';
import { EnumTipoProduto } from './../../../enuns/produto/EnumTipoProduto';
import { IResponse } from "./../../../models/IResponse";
import { LancheService } from './../../../services/lanche/LancheService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { IpaginateConfigure, Paginacao } from '../../../components/paginacao/paginacao';
import { ProdutoService } from '../../../services/produto/ProdutoService';
import { LancheModel } from '../../../models/lanche/LancheModel';
import { ProdutoModel } from '../../../models/produto/ProdutoModel';

export class LancheCadastroController extends BaseCadastroController<LancheModel, LancheService> {
    static $inject = ['LancheService', '$rootScope', '$scope', '$state', '$location', 'ProdutoService', 'CategoriaService'];
    public produtos: ProdutoModel[];

    public paginacaoConfig: IpaginateConfigure = Paginacao.default;
    public categorias: CategoriaModel[] = [];

    constructor(protected lancheService: LancheService, protected $rootScope, protected $scope, protected state, 
        protected $location, private podutoService: ProdutoService, private categoriaService: CategoriaService) {
        super(lancheService, $rootScope, $scope, state, $location);
        this.nome = 'Lanche';
        this.produtoFindAll();
        this.categoriaFindAll();
    }

    protected updateComponent() {
        this.entity.tipoProduto = EnumTipoProduto.Lanche;
    }

    public viewPaginacaoChange(even: IpaginateConfigure) {
        this.paginacaoConfig = even;
        this.paginacaoFindAll();
    }

    private paginacaoFindAll() {
        if (!Paginacao.valido(this.paginacaoConfig)) return;
        this.produtoFindAll();
    }

    public categoriaFindAll() {
        this.$rootScope.$emit('loading', true);
        this.categoriaService.findAll(this.paginacaoConfig.pageAtual)
            .then((resultado: IResponse<ProdutoModel>) => this.findAllTryCategoria(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }

    protected findAllTryCategoria(resultado: IResponse<CategoriaModel>) {
        this.categorias = resultado.content;
        this.$rootScope.$emit('loading', false);
    }

    public produtoFindAll() {
        this.$rootScope.$emit('loading', true);
        this.podutoService.findAll(this.paginacaoConfig.pageAtual)
            .then((resultado: IResponse<ProdutoModel>) => this.findAllTryProduto(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }

    protected findAllTryProduto(resultado: IResponse<ProdutoModel>) {
        this.produtos = resultado.content;
        this.paginacaoConfig = Paginacao.configure(resultado, this.paginacaoConfig.pageAtual);
        this.$rootScope.$emit('loading', false);
    }

    public viewRemoverItem(id: number) {
        this.entity.viewRemoverItem(id);
    }

    public viewDuplicarItem(id: number) {
        this.entity.viewDuplicarItem(id);
    }

    public viewUnicoItem(id: number) {
        this.entity.viewUnicoItem(id);
    }

    public viewSelecionarProduto(index: number) {
        this.entity.viewSelecionarProduto(index, <any>this.produtos);
    }

    public viewContarQuantidade(id: number) {
        return this.entity.contarQuantidade(id);
    }

    public viewIngredientesLancheFilter() {
        return this.entity.ingredientesLancheFilter();
    }

    public viewProdutoFiltrado() {
        if (this.produtos)
            return this.produtos.filter(p =>
                !(this.entity.ingredientesLanche
                    && this.entity.ingredientesLanche.find(i => i.id === p.id)));
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