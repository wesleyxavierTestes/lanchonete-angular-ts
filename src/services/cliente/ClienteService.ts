import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { rotaFindAllFilter } from "../../utils/HttpConfig";

export class ClienteService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'cliente');
    }

    findAllFilter(page: number, objeto: object) {
        return this.$http.post(rotaFindAllFilter(this.routeName, page), JSON.stringify(objeto));
    }
}

sglanchoneteApp.service('ClienteService', ClienteService);