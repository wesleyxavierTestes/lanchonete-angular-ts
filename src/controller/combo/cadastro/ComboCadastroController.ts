import { ComboService } from './../../../services/combo/ComboService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class ComboCadastroController extends BaseCadastroController<any, ComboService> {
    static $inject = ['ComboService', '$rootScope', '$state', '$location'];

    constructor(protected comboService: ComboService, protected $rootScope, protected state, protected $location) {
        super(comboService, $rootScope, state, $location);
        this.nome = 'Combo';
    }
    protected updateComponent() { }
}
sglanchoneteApp.component('combocadastro',
    {
        controller: ComboCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./combo.cadastro.html')
    });