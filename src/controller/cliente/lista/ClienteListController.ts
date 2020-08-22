import { ClienteService } from './../../../services/cliente/ClienteService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';

export class ClienteListController extends BaseListController<any, ClienteService> {
    static $inject = ['ClienteService', '$rootScope'];

    constructor(protected clienteService, protected $rootScope) {
        super(clienteService, $rootScope);
        this.nome = 'Cliente';
    }
}
sglanchoneteApp.component('clientelist', 
{
    controller: ClienteListController,
    controllerAs: 'view',
    template: require('./cliente.list.html')
});
