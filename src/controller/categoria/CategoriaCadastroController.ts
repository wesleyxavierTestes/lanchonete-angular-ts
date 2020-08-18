import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class CategoriaCadastroController  extends BaseCadastroController<any> {
    static $inject = ['CategoriaService'];

    constructor(protected categoriaService) {
        super(categoriaService);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.controller('CategoriaCadastroController', CategoriaCadastroController);