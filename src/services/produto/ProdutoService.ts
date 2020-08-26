import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { ProdutoModel } from '../../models/produto/ProdutoModel';

export class ProdutoService extends BaseService<ProdutoModel> {
    
    constructor(protected $http) {
        super($http, 'produto');
    }
}

sglanchoneteApp.service('ProdutoService', ProdutoService);