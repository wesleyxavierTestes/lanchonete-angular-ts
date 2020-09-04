import { ClienteService } from './../../../services/cliente/ClienteService';
import sglanchoneteApp from "../../../app";
import { BaseListController } from '../../BaseListController';
import { ClienteModel } from '../../../models/cliente/ClienteModel';
import { IOnInit } from 'angular';
import angular from 'angular';

export class ClienteListController extends BaseListController<ClienteModel, ClienteService> implements IOnInit {
    static $inject = ['ClienteService', '$rootScope', '$scope', '$compile'];

    constructor(protected clienteService, protected $rootScope, protected $scope, $compile) {
        super(clienteService, $rootScope, $scope);
        this.nome = 'Cliente';
    }
    $onInit(): void {

    }
}
sglanchoneteApp.component('clientelist', 
{
    controller: ClienteListController,
    controllerAs: 'view',
    template: require('./cliente.list.html')
});
