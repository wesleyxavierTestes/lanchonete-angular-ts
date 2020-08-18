import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class EstoqueCadastroController extends BaseCadastroController<any> {
    static $inject = ['EstoqueService'];

    constructor(protected estoqueService) {
        super(estoqueService);
        this.nome = 'Estoque';
    }

}
sglanchoneteApp.controller('EstoqueCadastroController', EstoqueCadastroController);