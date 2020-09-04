import { IResponse } from "./../../../models/IResponse";
import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { EstoqueModel } from '../../../models/estoque/EstoqueModel';
import { ProdutoModel } from '../../../models/produto/ProdutoModel';
import { ProdutoService } from '../../../services/produto/ProdutoService';

enum EnumTipoEstoque {
    add = 'add',
    remove = 'remove'
}

export class EstoqueCadastroController extends BaseCadastroController<EstoqueModel, EstoqueService> {
    static $inject = ['EstoqueService', '$rootScope', '$scope', '$state', '$location', 'ProdutoService'];

    public produtos: ProdutoModel[];

    public tipo: EnumTipoEstoque = EnumTipoEstoque.add;

    public produtoPage: {
        totalPages?: number;
        numberOfElements?: number;
        totalElements?: number;
    } = {};
    open = false;

    constructor(protected estoqueService: EstoqueService, 
        protected $rootScope, protected $scope, protected state, protected $location, private produtoService: ProdutoService) {
        super(estoqueService, $rootScope, $scope, state, $location);
        this.nome = 'Estoque';
    }

    protected updateComponent() {
        this.navegaEditar = false;
     }

    public formSubmit() {
        this.editar ? this.viewEditar(this.tipo) : this.viewSalvar(this.tipo);
    }

    public viewSetSaida() {
        this.tipo = EnumTipoEstoque.remove;
    }

    public viewSetEntrada() {
        this.tipo = EnumTipoEstoque.add;
    }

    public viewPesquisarProduto(event: string) {
        this.updateLoading(true);
        this.produtoService.findAllNome(1, event)
            .then((resultado) => this.viewPesquisarProdutoTry(resultado))
            .catch(error => this.$rootScope.$emit('erroMessage', error.message))
            .finally(() => this.updateLoading(false));
    }

    private viewPesquisarProdutoTry(resultado: IResponse<ProdutoModel>) {
        this.produtoPage.totalPages = resultado.totalPages;
        this.produtoPage.numberOfElements = resultado.numberOfElements;
        this.produtoPage.totalElements = resultado.totalElements;

        this.produtos = resultado.content;

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