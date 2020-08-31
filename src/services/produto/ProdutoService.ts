import { IResponse } from "./../../models/IResponse";
import { IHttpService, IPromise, IHttpResponse } from 'angular';
import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { ProdutoModel } from '../../models/produto/ProdutoModel';
import { rotaFindAllNome } from '../../utils/HttpConfig';

export class ProdutoService extends BaseService<ProdutoModel> {
    
    constructor(protected $http: IHttpService) {
        super($http, 'produto');
    }

    findAllNome(page: number, nome: string): IPromise<IResponse<ProdutoModel>> {
        return this.$http.get<ProdutoModel>(rotaFindAllNome(this.routeName, page, nome), this.CONFIG_TOKEN)
        .then(response => Promise.resolve((<any>response.data) as IResponse<ProdutoModel>))
        .catch((response: IHttpResponse<ProdutoModel>) => this.catchCustom<IResponse<ProdutoModel>>(response as any));
    }
}

sglanchoneteApp.service('ProdutoService', ProdutoService);