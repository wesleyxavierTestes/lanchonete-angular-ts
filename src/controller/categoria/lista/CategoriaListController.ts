import { CategoriaService } from './../../../services/categoria/CategoriaService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class CategoriaListController extends BaseListController<any, CategoriaService> {
    static $inject = ['CategoriaService', '$scope'];

    constructor(protected categoriaService, protected $scope) {
        super(categoriaService, $scope);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.component('categorialist', {
    controller: CategoriaListController,
    controllerAs: 'view',
    template: require('./categoria.list.html')
});