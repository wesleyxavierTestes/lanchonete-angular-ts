import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class CardapioCadastroController extends BaseCadastroController<any> {
    static $inject = ['CardapioService', '$rootScope'];
    
    constructor(protected cardapioService, protected $rootScope) {
        super(cardapioService, $rootScope);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.controller('CardapioCadastroController', CardapioCadastroController);
