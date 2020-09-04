import { CategoriaService } from './../../../services/categoria/CategoriaService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { CategoriaModel } from '../../../models/categoria/CategoriaModel';

export class CategoriaListController extends BaseListController<CategoriaModel, CategoriaService> {
    static $inject = ['CategoriaService', '$rootScope', '$scope'];

    constructor(protected categoriaService, protected $rootScope, protected $scope) {
        super(categoriaService, $rootScope, $scope);
        this.nome = 'Categoria';
    }

}
sglanchoneteApp.component('categorialist', {
    controller: CategoriaListController,
    controllerAs: 'view',
    template: require('./categoria.list.html')
});