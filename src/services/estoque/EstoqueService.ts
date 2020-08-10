import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class EstoqueService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'estoque');
    }
}

sglanchoneteApp.service('EstoqueService', EstoqueService);