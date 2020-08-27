import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { EstoqueModel } from '../../../models/estoque/EstoqueModel';
import { ProdutoModel } from '../../../models/produto/ProdutoModel';
import { ProdutoService } from '../../../services/produto/ProdutoService';
interface IPesquisaProduto {
    data: {
        content: ProdutoModel[];
        totalPages?: number;
        numberOfElements?: number;
        totalElements?: number;
    };
}

enum EnumTipoEstoque {
    add = 'add',
    remove = 'remove'
}

export class EstoqueCadastroController extends BaseCadastroController<EstoqueModel, EstoqueService> {
    static $inject = ['EstoqueService', '$rootScope', '$state', '$location', 'ProdutoService'];

    public produtos: ProdutoModel[];

    public tipo: EnumTipoEstoque = EnumTipoEstoque.add;

    public produtoPage: {
        totalPages?: number;
        numberOfElements?: number;
        totalElements?: number;
    } = {};

    constructor(protected estoqueService: EstoqueService, protected $rootScope, protected state, protected $location, private produtoService: ProdutoService) {
        super(estoqueService, $rootScope, state, $location);
        this.nome = 'Estoque';
    }
    protected updateComponent() {
        this.navegaEditar = false;
     }

    public formSubmit() {
        this.editar ? this.viewEditar(this.tipo) : this.viewSalvar(this.tipo);
    }

    public viewPesquisarProduto(event: string) {
        this.updateLoading(true);
        this.produtoService.findAllNome(1, event)
            .then((resultado: IPesquisaProduto) => this.viewPesquisarProdutoTry(resultado))
            .catch(error => this.$rootScope.$emit('erroMessage', error.message))
            .finally(() => this.updateLoading(false));
    }

    private viewPesquisarProdutoTry(resultado: IPesquisaProduto) {
        this.produtoPage.totalPages = resultado.data.totalPages;
        this.produtoPage.numberOfElements = resultado.data.numberOfElements;
        this.produtoPage.totalElements = resultado.data.totalElements;

        this.produtos = resultado.data.content;

    }

    public viewSetProduto(produto: ProdutoModel) {
        this.entity.produto = produto;
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