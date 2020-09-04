import { LancheService } from './../../../services/lanche/LancheService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { LancheModel } from '../../../models/lanche/LancheModel';

export class LancheListController extends BaseListController<LancheModel, LancheService> {
    static $inject = ['LancheService', '$rootScope', '$scope'];
    
    constructor(protected lancheService, protected $rootScope, protected $scope) {
        super(lancheService, $rootScope, $scope);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.component('lanchelist', 
{
    controller: LancheListController,
    controllerAs: 'view',
    template: require('./lanche.list.html')
});