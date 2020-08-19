import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class EstoqueCadastroController extends BaseCadastroController<any> {
    static $inject = ['EstoqueService', '$scope', '$route'];

    constructor(protected estoqueService, protected $scope, protected $route) {
        super(estoqueService, $scope, $route);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.controller('EstoqueCadastroController', EstoqueCadastroController);