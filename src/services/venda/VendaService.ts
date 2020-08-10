import sglanchoneteApp from "../../app";
import { rotaConfig } from "../../utils/HttpConfig";
import { BaseService } from "../BaseService";

export class VendaService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'venda');
    }
}

sglanchoneteApp.service('VendaService', VendaService);