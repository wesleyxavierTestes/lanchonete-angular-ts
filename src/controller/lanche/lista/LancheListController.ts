import { LancheService } from './../../../services/lanche/LancheService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { LancheModel } from '../../../models/lanche/LancheModel';

export class LancheListController extends BaseListController<LancheModel, LancheService> {
    static $inject = ['LancheService', '$rootScope'];
    
    constructor(protected lancheService, protected $rootScope) {
        super(lancheService, $rootScope);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.component('lanchelist', 
{
    controller: LancheListController,
    controllerAs: 'view',
    template: require('./lanche.list.html')
});