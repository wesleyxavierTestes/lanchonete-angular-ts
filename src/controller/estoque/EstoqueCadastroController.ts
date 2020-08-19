import { EstoqueService } from './../../services/estoque/EstoqueService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class EstoqueCadastroController extends BaseCadastroController<any, EstoqueService> {
    static $inject = ['EstoqueService', '$scope', '$route'];

    constructor(protected estoqueService: EstoqueService, protected $scope, protected $route) {
        super(estoqueService, $scope, $route);
        this.nome = 'Estoque';
     }
    protected updateComponent() {}
}
sglanchoneteApp.controller('EstoqueCadastroController', EstoqueCadastroController);