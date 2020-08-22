import { ComboService } from './../../../services/combo/ComboService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class ComboListController extends BaseListController<any, ComboService> {
    static $inject = ['ComboService', '$rootScope'];

    constructor(protected comboService, protected $rootScope) {
        super(comboService, $rootScope);
        this.nome = 'Combo';
    }

}
sglanchoneteApp.component('combolist', 
{
    controller: ComboListController,
    controllerAs: 'view',
    template: require('./combo.list.html')
});