import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class CategoriaCadastroController  extends BaseCadastroController<any> {
    static $inject = ['CategoriaService', '$rootScope'];

    constructor(protected categoriaService, protected $rootScope) {
        super(categoriaService, $rootScope);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.controller('CategoriaCadastroController', CategoriaCadastroController);