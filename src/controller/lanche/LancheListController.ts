import { LancheService } from './../../services/lanche/LancheService';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class LancheListController extends BaseListController<any, LancheService> {
    static $inject = ['LancheService', '$rootScope'];
    
    constructor(protected lancheService, protected $rootScope) {
        super(lancheService, $rootScope);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.controller('LancheListController', LancheListController);