import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { EstoqueModel } from '../../models/estoque/EstoqueModel';

export class EstoqueService extends BaseService<EstoqueModel> {
    
    constructor(protected $http) {
        super($http, 'estoque');
    }
}

sglanchoneteApp.service('EstoqueService', EstoqueService);