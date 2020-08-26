import sglanchoneteApp from "../../app";
import { rotaFindAll } from "../../utils/HttpConfig";
import { BaseService } from "../BaseService";
import { VendaModel } from '../../models/venda/VendaModel';

export class VendaService extends BaseService<VendaModel> {
    
    constructor(protected $http) {
        super($http, 'venda');
    }
}

sglanchoneteApp.service('VendaService', VendaService);