import { CardapioService } from './../../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class CardapioListController extends BaseListController<any, CardapioService> {
    static $inject = ['CardapioService', '$scope'];
    
    constructor(protected cardapioService, protected $scope) {
        super(cardapioService, $scope);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.component('cardapiolist', 
{
    controller: CardapioListController,
    controllerAs: 'view',
    template: require('./cardapio.list.html')
});
