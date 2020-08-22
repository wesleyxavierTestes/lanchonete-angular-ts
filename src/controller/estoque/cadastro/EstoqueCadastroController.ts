import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class EstoqueCadastroController extends BaseCadastroController<any, EstoqueService> {
    static $inject = ['EstoqueService', '$rootScope', '$state', '$location'];

    constructor(protected estoqueService: EstoqueService, protected $rootScope, protected state, protected $location) {
        super(estoqueService, $rootScope, state, $location);
        this.nome = 'Estoque';
     }
    protected updateComponent() {}
}
sglanchoneteApp.component('estoquecadastro',  
{
    controller: EstoqueCadastroController,
    controllerAs: 'view',
    template: require('./estoque.cadastro.html')
});