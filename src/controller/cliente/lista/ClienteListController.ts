import { ClienteService } from './../../../services/cliente/ClienteService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { ClienteModel } from '../../../models/cliente/ClienteModel';

export class ClienteListController extends BaseListController<ClienteModel, ClienteService> {
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
