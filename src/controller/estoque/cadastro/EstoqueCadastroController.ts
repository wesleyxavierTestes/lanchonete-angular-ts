import { EstoqueService } from './../../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';

export class EstoqueCadastroController extends BaseCadastroController<any, EstoqueService> {
    static $inject = ['EstoqueService', '$scope', '$route', '$location'];

    constructor(protected estoqueService: EstoqueService, protected $scope, protected $route, protected $location) {
        super(estoqueService, $scope, $route, $location);
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