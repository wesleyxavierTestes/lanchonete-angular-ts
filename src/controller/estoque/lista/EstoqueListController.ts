import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { EstoqueModel } from '../../../models/estoque/EstoqueModel';

export class EstoqueListController extends BaseListController<EstoqueModel, EstoqueService> {
    static $inject = ['EstoqueService', '$rootScope', '$scope'];

    constructor(protected estoqueService, protected $rootScope, protected $scope) {
        super(estoqueService, $rootScope, $scope);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.component('estoquelist', 
{
    controller: EstoqueListController,
    controllerAs: 'view',
    template: require('./estoque.list.html')
});