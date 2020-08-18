import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class ComboListController extends BaseListController<any> {
    static $inject = ['ComboService', '$rootScope'];

    constructor(protected comboService, protected $rootScope) {
        super(comboService, $rootScope);
        this.nome = 'Combo';
    }

}
sglanchoneteApp.controller('ComboListController', ComboListController);