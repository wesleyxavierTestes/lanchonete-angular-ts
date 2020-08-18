import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class VendaCadastroController extends BaseCadastroController<any> {
    static $inject = ['VendaService'];

    constructor(protected vendaService) {
        super(vendaService);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.controller('VendaCadastroController', VendaCadastroController);