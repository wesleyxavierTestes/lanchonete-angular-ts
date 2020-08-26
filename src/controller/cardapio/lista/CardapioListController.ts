import { CardapioService } from './../../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { CardapioModel } from '../../../models/cardapio/CardapioModel';

export class CardapioListController extends BaseListController<CardapioModel, CardapioService> {
    static $inject = ['CardapioService', '$rootScope'];
    
    constructor(protected cardapioService, protected $rootScope) {
        super(cardapioService, $rootScope);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.component('cardapiolist', 
{
    controller: CardapioListController,
    controllerAs: 'view',
    template: require('./cardapio.list.html')
});
