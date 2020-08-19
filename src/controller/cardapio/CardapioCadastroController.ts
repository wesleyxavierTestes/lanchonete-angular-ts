import { CardapioService } from './../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class CardapioCadastroController extends BaseCadastroController<any, CardapioService> {
   
    static $inject = ['CardapioService', '$scope', '$route'];

    constructor(protected cardapioService: CardapioService, protected $scope, protected $route) {
        super(cardapioService, $scope, $route);
        this.nome = 'Cardapio';
    }

    protected updateComponent() {}
}
sglanchoneteApp.controller('CardapioCadastroController', CardapioCadastroController);
