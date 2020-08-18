import sglanchoneteApp from "../../app";
import { IpaginateConfigure, Paginacao } from "../../components/paginacao/paginacao";
import { BaseListController } from '../BaseListController';

class ClienteListController extends BaseListController<any> {
    static $inject = ['ClienteService'];

    rota = 'Cliente';

    constructor(protected clienteService) {
        super(clienteService);
        this.nome = 'Cliente';
    }
}
sglanchoneteApp.controller('ClienteListController', ClienteListController);
