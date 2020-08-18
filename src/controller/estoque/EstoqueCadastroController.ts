import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class EstoqueCadastroController extends BaseCadastroController<any> {
    static $inject = ['EstoqueService', '$scope'];

    constructor(protected estoqueService, protected $scope) {
        super(estoqueService, $scope);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.controller('EstoqueCadastroController', EstoqueCadastroController);