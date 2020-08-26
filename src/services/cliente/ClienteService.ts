import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { ClienteModel } from '../../models/cliente/ClienteModel';

export class ClienteService extends BaseService<ClienteModel> {
    
    constructor(protected $http) {
        super($http, 'cliente');
    }
}

sglanchoneteApp.service('ClienteService', ClienteService);