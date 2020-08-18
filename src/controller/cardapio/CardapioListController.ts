import { CardapioService } from './../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class CardapioListController extends BaseListController<any, CardapioService> {
    static $inject = ['CardapioService', '$rootScope'];
    
    constructor(protected cardapioService, protected $rootScope) {
        super(cardapioService, $rootScope);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.controller('CardapioListController', CardapioListController);
