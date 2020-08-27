import { CategoriaService } from './../../../services/categoria/CategoriaService';
import { ProdutoService } from './../../../services/produto/ProdutoService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import * as _ from 'lodash';
import { ProdutoModel } from '../../../models/produto/ProdutoModel';
import { CategoriaModel } from '../../../models/categoria/CategoriaModel';

export class ProdutoCadastroController extends BaseCadastroController<ProdutoModel, ProdutoService> {
    static $inject = ['ProdutoService', '$rootScope', '$state', '$location', 'CategoriaService'];

    public tiposProduto = [
        { key: 'Produto', value: 'Produto' },
        { key: 'Ingrediênte', value: 'Ingrediente' },
        { key: 'Bebida', value: 'Bebida' },
        { key: 'Lanche', value: 'Lanche' },
        { key: 'Combo', value: 'Combo' },
        { key: 'Outros', value: 'Outros' }
    ]
    public Categorias: CategoriaModel[];
    class: string;

    constructor(protected podutoService: ProdutoService, protected $rootScope, protected state, protected $location, protected categoriaService: CategoriaService) {
        super(podutoService, $rootScope, state, $location);
        this.nome = 'Produto';
    }

    public viewInitCategorias() {
        this.updateLoading(true);
        this.categoriaService.findAll(1)
            .then(resultado => {
                this.Categorias = resultado.data.content;
            })
            .catch(error => this.$rootScope.$emit('erroMessage', error.message))
            .finally(() => this.updateLoading(false))
    }

    viewUpdateValor(event: string) {
        this.entity.valor = event;
    }

    protected updateComponent() {

    }
}
sglanchoneteApp.component('produtocadastro',
    {
        controller: ProdutoCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./produto.cadastro.html')
    });