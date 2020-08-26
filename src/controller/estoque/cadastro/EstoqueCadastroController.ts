import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { EstoqueModel } from '../../../models/estoque/EstoqueModel';

export class EstoqueCadastroController extends BaseCadastroController<EstoqueModel, EstoqueService> {
    static $inject = ['EstoqueService', '$rootScope', '$state', '$location'];

    constructor(protected estoqueService: EstoqueService, protected $rootScope, protected state, protected $location) {
        super(estoqueService, $rootScope, state, $location);
        this.nome = 'Estoque';
    }
    protected updateComponent() { }
}
sglanchoneteApp.component('estoquecadastro',
    {
        controller: EstoqueCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./estoque.cadastro.html')
    });