import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class EstoqueListController extends BaseListController<any, EstoqueService> {
    static $inject = ['EstoqueService', '$rootScope'];

    constructor(protected estoqueService, protected $rootScope) {
        super(estoqueService, $rootScope);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.component('estoquelist', 
{
    controller: EstoqueListController,
    controllerAs: 'view',
    template: require('./estoque.list.html')
});