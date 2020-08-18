import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class ComboListController extends BaseListController<any> {
    static $inject = ['ComboService'];

    constructor(protected comboService) {
        super(comboService);
        this.nome = 'Combo';
    }

}
sglanchoneteApp.controller('ComboListController', ComboListController);