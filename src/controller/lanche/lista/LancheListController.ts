import { LancheService } from './../../../services/lanche/LancheService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class LancheListController extends BaseListController<any, LancheService> {
    static $inject = ['LancheService', '$scope'];
    
    constructor(protected lancheService, protected $scope) {
        super(lancheService, $scope);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.component('lanchelist', 
{
    controller: LancheListController,
    controllerAs: 'view',
    template: require('./lanche.list.html')
});