import { CategoriaService } from './../../services/categoria/CategoriaService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class CategoriaCadastroController extends BaseCadastroController<any, CategoriaService> {
    static $inject = ['CategoriaService', '$scope', '$route', '$location'];

    constructor(protected categoriaService: CategoriaService, protected $scope, protected $route, protected $location) {
        super(categoriaService, $scope, $route, $location);
        this.nome = 'Categoria';
        this.$location = $location;
    }
    protected updateComponent() { }
}
sglanchoneteApp.controller('CategoriaCadastroController', CategoriaCadastroController);