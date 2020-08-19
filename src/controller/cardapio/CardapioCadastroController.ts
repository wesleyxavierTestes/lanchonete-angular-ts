import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class CardapioCadastroController extends BaseCadastroController<any> {
    static $inject = ['CardapioService', '$scope', '$route'];
    
    constructor(protected cardapioService, protected $scope, protected $route) {
        super(cardapioService, $scope, $route);
        this.nome = 'Cardapio';
    }

}
sglanchoneteApp.controller('CardapioCadastroController', CardapioCadastroController);
