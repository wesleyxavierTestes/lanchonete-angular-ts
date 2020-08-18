import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class CardapioCadastroController extends BaseCadastroController<any> {
    static $inject = ['CardapioService'];
    
    constructor(protected cardapioService) {
        super(cardapioService);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.controller('CardapioCadastroController', CardapioCadastroController);
