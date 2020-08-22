import { CardapioService } from './../../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class CardapioCadastroController extends BaseCadastroController<any, CardapioService> {

    static $inject = ['CardapioService', '$rootScope', '$state', '$location'];

    constructor(protected cardapioService: CardapioService, protected $rootScope, protected state, protected $location) {
        super(cardapioService, $rootScope, state, $location);
        this.nome = 'Cardapio';
    }

    protected updateComponent() { }
}
sglanchoneteApp.component('cardapiocadastro',
    {
        controller: CardapioCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./cardapio.cadastro.html')
    });
