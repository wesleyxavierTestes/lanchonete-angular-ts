import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { EstoqueModel } from '../../models/estoque/EstoqueModel';
import { rotaSaveTipo, rotaUpdateTipo } from "../../utils/HttpConfig";

export class EstoqueService extends BaseService<EstoqueModel> {
    
    constructor(protected $http) {
        super($http, 'estoque');
    }
}

sglanchoneteApp.service('EstoqueService', EstoqueService);