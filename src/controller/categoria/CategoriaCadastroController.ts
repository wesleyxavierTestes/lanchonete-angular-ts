import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class CategoriaCadastroController  extends BaseCadastroController<any> {
    static $inject = ['CategoriaService', '$scope', '$route'];

    constructor(protected categoriaService, protected $scope, protected $route) {
        super(categoriaService, $scope, $route);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.controller('CategoriaCadastroController', CategoriaCadastroController);