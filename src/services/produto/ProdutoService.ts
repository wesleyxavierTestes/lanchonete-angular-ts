import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { ProdutoModel } from '../../models/produto/ProdutoModel';
import { rotaFindAllNome } from '../../utils/HttpConfig';

export class ProdutoService extends BaseService<ProdutoModel> {
    
    constructor(protected $http) {
        super($http, 'produto');
    }

    findAllNome(page: number, nome: string): Promise<{ data: { content: ProdutoModel[] } }> {
        return this.$http.get(rotaFindAllNome(this.routeName, page, nome), this.CONFIG);
    }
}

sglanchoneteApp.service('ProdutoService', ProdutoService);