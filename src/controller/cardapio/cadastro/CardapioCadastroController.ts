import { CardapioService } from './../../../services/cardapio/CardapioService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { CardapioModel } from '../../../models/cardapio/CardapioModel';
import angular from 'angular';

export class CardapioCadastroController extends BaseCadastroController<CardapioModel, CardapioService> {

    static $inject = ['CardapioService', '$rootScope', '$scope', '$state', '$location', '$compile'];

    constructor(protected cardapioService: CardapioService, 
        protected $rootScope, protected $scope, protected state, protected $location, private $compile) {
        super(cardapioService, $rootScope, $scope, state, $location);
        this.nome = 'Cardapio';

         let templ = (<HTMLTemplateElement>angular.element(document).find('template[mytemplate]')[0]);
    angular.element(document).find('ng-container[name="mycontainer"]').append(this.$compile(templ.content.firstElementChild)(this.$scope));
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
