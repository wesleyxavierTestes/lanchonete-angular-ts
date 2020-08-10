import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class ProdutoService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'produto');
    }
}

sglanchoneteApp.service('ProdutoService', ProdutoService);