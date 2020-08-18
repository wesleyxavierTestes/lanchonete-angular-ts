import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class CardapioCadastroController extends BaseCadastroController<any> {
    static $inject = ['CardapioService', '$scope'];
    
    constructor(protected cardapioService, protected $scope) {
        super(cardapioService, $scope);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.controller('CardapioCadastroController', CardapioCadastroController);
