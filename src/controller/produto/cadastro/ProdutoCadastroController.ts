import { CategoriaService } from './../../../services/categoria/CategoriaService';
import { ProdutoService } from './../../../services/produto/ProdutoService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { MascaraSet } from '../../../utils/Mascaras';
import * as _ from 'lodash';

export class ProdutoCadastroController extends BaseCadastroController<any, ProdutoService> {
    static $inject = ['ProdutoService', '$scope', '$route', '$location', 'CategoriaService'];

    public tiposProduto = [
        { key: 'Produto', value: 'Produto' },
        { key: 'Ingrediênte', value: 'Ingrediente' },
        { key: 'Bebida', value: 'Bebida' },
        { key: 'Lanche', value: 'Lanche' },
        { key: 'Combo', value: 'Combo' },
        { key: 'Outros', value: 'Outros' }
    ]
    public Categorias: any[];

    constructor(protected podutoService: ProdutoService, protected $scope, protected $route, protected $location, protected categoriaService: CategoriaService) {
        super(podutoService, $scope, $route, $location);
        this.nome = 'Produto';
    }

    public viewInitCategorias() {
        this.categoriaService.findAll(1)
            .then(resultado => this.Categorias = resultado.data.content)
            .catch(error => this.$scope.$emit('erroMessage', error.message))
            .finally(() => this.$scope.$emit('loading', false))
    }

    protected updateComponent() {
        MascaraSet.money();
    }
}
sglanchoneteApp.component('produtocadastro',
    {
        controller: ProdutoCadastroController,
        controllerAs: 'view',
        template: require('./produto.cadastro.html')
    });