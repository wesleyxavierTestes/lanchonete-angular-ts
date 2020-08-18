import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class VendaCadastroController extends BaseCadastroController<any> {
    static $inject = ['VendaService', '$scope'];

    constructor(protected vendaService, protected $rootScope) {
        super(vendaService, $rootScope);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.controller('VendaCadastroController', VendaCadastroController);