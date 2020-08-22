import { LancheService } from './../../../services/lanche/LancheService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class LancheCadastroController extends BaseCadastroController<any, LancheService> {
    static $inject = ['LancheService', '$rootScope', '$state', '$location'];

    constructor(protected lancheService: LancheService, protected $rootScope, protected state, protected $location) {
        super(lancheService, $rootScope, state, $location);
        this.nome = 'Lanche';
    }
    protected updateComponent() { }
}
sglanchoneteApp.component('lanchecadastro',
    {
        controller: LancheCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./lanche.cadastro.html')
    });