import { CardapioService } from './../../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { CardapioModel } from '../../../models/cardapio/CardapioModel';

export class CardapioCadastroController extends BaseCadastroController<CardapioModel, CardapioService> {

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
