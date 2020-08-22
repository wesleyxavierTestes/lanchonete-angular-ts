import { CategoriaService } from './../../../services/categoria/CategoriaService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class CategoriaCadastroController extends BaseCadastroController<any, CategoriaService> {
    static $inject = ['CategoriaService', '$rootScope', '$state', '$location'];

    constructor(protected categoriaService: CategoriaService, protected $rootScope, protected state, protected $location) {
        super(categoriaService, $rootScope, state, $location);
        this.nome = 'Categoria';
        this.$location = $location;
    }
    protected updateComponent() { }
}
sglanchoneteApp.component('categoriacadastro',
    {
        controller: CategoriaCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./categoria.cadastro.html')
    });