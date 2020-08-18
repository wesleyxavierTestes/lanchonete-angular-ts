import sglanchoneteApp from "../../app";
import { IpaginateConfigure, Paginacao } from "../../components/paginacao/paginacao";
import { BaseCadastroController } from '../BaseCadastroController';

class ClienteCadastroController extends BaseCadastroController<any> {
    static $inject = ['ClienteService', '$rootScope'];

    rota = 'Cliente';

    constructor(protected clienteService, protected $rootScope) {
        super(clienteService, $rootScope);
        this.nome = 'Cliente';
    }
}
sglanchoneteApp.controller('ClienteCadastroController', ClienteCadastroController);
