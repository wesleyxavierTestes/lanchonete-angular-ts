import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { EstoqueModel } from '../../../models/estoque/EstoqueModel';
import { ProdutoModel } from '../../../models/produto/ProdutoModel';
import { ProdutoService } from '../../../services/produto/ProdutoService';

export class EstoqueCadastroController extends BaseCadastroController<EstoqueModel, EstoqueService> {
    static $inject = ['EstoqueService', '$rootScope', '$state', '$location', 'ProdutoService'];

    public pesquisarProdutoAtivo = false;
    public produtos: ProdutoModel[];
    public produtoNome = '';

    public produtoPage: {
        totalPages?: number;
        numberOfElements?: number;
        totalElements?: number;
    } = {};

    constructor(protected estoqueService: EstoqueService, protected $rootScope, protected state, protected $location, private produtoService: ProdutoService) {
        super(estoqueService, $rootScope, state, $location);
        this.nome = 'Estoque';
    }
    protected updateComponent() { }

    public viewPesquisarProduto() {
        this.updateLoading(true);
        this.produtoService.findAllNome(1, this.produtoNome)
            .then((resultado: { data: { content:  ProdutoModel[],  totalPages?: number;
                numberOfElements?: number;
                totalElements?: number; }}) => {
                this.produtoPage.totalPages = resultado.data.totalPages;
                this.produtoPage.numberOfElements = resultado.data.numberOfElements;
                this.produtoPage.totalElements = resultado.data.totalElements;

                this.produtos = resultado.data.content;
            })
            .catch(error => this.$rootScope.$emit('erroMessage', error.message))
            .finally(() => {
                this.updateLoading(false);
                this.pesquisarProdutoAtivo = !this.pesquisarProdutoAtivo;
            })
    }
}
sglanchoneteApp.component('estoquecadastro',
    {
        controller: EstoqueCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./estoque.cadastro.html')
    });