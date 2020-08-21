import { CardapioService } from './../../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class CardapioCadastroController extends BaseCadastroController<any, CardapioService> {
   
    static $inject = ['CardapioService', '$scope', '$route', '$location'];

    constructor(protected cardapioService: CardapioService, protected $scope, protected $route, protected $location) {
        super(cardapioService, $scope, $route, $location);
        this.nome = 'Cardapio';
    }

    protected updateComponent() {}
}
sglanchoneteApp.component('cardapiocadastro', 
{
    controller: CardapioCadastroController,
    controllerAs: 'view',
    template: require('./cardapio.cadastro.html')
});
