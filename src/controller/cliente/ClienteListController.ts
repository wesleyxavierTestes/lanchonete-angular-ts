import { ClienteService } from './../../services/cliente/ClienteService';
import sglanchoneteApp from "../../app";
import { BaseListController } from '../BaseListController';

export class ClienteListController extends BaseListController<any, ClienteService> {
    static $inject = ['ClienteService', '$scope'];

    constructor(protected clienteService, protected $scope) {
        super(clienteService, $scope);
        this.nome = 'Cliente';
    }
}
sglanchoneteApp.controller('ClienteListController', ClienteListController);
