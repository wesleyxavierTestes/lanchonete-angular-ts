import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class CardapioListController extends BaseListController<any> {
    static $inject = ['CardapioService'];
    
    constructor(protected cardapioService) {
        super(cardapioService);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.controller('CardapioListController', CardapioListController);
