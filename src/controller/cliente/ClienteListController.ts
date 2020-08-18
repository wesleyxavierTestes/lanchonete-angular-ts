import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

class ClienteListController extends BaseListController<any> {
    static $inject = ['ClienteService', '$rootScope'];

    rota = 'Cliente';

    constructor(protected clienteService, protected $rootScope) {
        super(clienteService, $rootScope);
        this.nome = 'Cliente';
    }
}
sglanchoneteApp.controller('ClienteListController', ClienteListController);
