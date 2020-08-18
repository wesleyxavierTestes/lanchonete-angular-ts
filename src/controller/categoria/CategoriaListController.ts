import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class CategoriaListController  extends BaseListController<any> {
    static $inject = ['CategoriaService', '$rootScope'];

    constructor(protected categoriaService, protected $rootScope) {
        super(categoriaService, $rootScope);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.controller('CategoriaListController', CategoriaListController);