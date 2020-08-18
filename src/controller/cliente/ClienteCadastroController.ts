import sglanchoneteApp from "../../app";
import { IpaginateConfigure, Paginacao } from "../../components/paginacao/paginacao";
import { BaseCadastroController } from '../BaseCadastroController';

class ClienteCadastroController extends BaseCadastroController<any> {
    static $inject = ['ClienteService'];

    rota = 'Cliente';

    constructor(protected clienteService) {
        super(clienteService);
        this.nome = 'Cliente';
    }
}
sglanchoneteApp.controller('ClienteCadastroController', ClienteCadastroController);
