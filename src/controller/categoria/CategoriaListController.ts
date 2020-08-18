import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class CategoriaListController  extends BaseListController<any> {
    static $inject = ['CategoriaService'];

    constructor(protected categoriaService) {
        super(categoriaService);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.controller('CategoriaListController', CategoriaListController);