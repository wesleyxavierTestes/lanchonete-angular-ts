import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class LancheListController extends BaseListController<any> {
    static $inject = ['LancheService'];
    
    constructor(protected lancheService) {
        super(lancheService);
        this.nome = 'Lanche';
    }

}
sglanchoneteApp.controller('LancheListController', LancheListController);