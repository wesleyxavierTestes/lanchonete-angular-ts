import { CategoriaService } from './../../../services/categoria/CategoriaService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class CategoriaListController extends BaseListController<any, CategoriaService> {
    static $inject = ['CategoriaService', '$rootScope'];

    constructor(protected categoriaService, protected $rootScope) {
        super(categoriaService, $rootScope);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.component('categorialist', {
    controller: CategoriaListController,
    controllerAs: 'view',
    template: require('./categoria.list.html')
});