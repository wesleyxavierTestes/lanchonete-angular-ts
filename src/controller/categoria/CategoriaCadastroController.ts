import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class CategoriaCadastroController  extends BaseCadastroController<any> {
    static $inject = ['CategoriaService', '$scope'];

    constructor(protected categoriaService, protected $scope) {
        super(categoriaService, $scope);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.controller('CategoriaCadastroController', CategoriaCadastroController);