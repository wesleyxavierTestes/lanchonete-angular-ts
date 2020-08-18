import { CategoriaService } from './../../services/categoria/CategoriaService';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class CategoriaListController  extends BaseListController<any, CategoriaService> {
    static $inject = ['CategoriaService', '$rootScope'];

    constructor(protected categoriaService, protected $rootScope) {
        super(categoriaService, $rootScope);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.controller('CategoriaListController', CategoriaListController);