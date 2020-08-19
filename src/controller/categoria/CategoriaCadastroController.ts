import { CategoriaService } from './../../services/categoria/CategoriaService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class CategoriaCadastroController  extends BaseCadastroController<any, CategoriaService> {
    static $inject = ['CategoriaService', '$scope', '$route'];

    constructor(protected categoriaService: CategoriaService, protected $scope, protected $route) {
        super(categoriaService, $scope, $route);
        this.nome = 'Categoria';
     }
    protected updateComponent() {}
}
sglanchoneteApp.controller('CategoriaCadastroController', CategoriaCadastroController);