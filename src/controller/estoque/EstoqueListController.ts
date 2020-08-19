import { EstoqueService } from './../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

export class EstoqueListController extends BaseListController<any, EstoqueService> {
    static $inject = ['EstoqueService', '$scope'];

    constructor(protected estoqueService, protected $scope) {
        super(estoqueService, $scope);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.controller('EstoqueListController', EstoqueListController);