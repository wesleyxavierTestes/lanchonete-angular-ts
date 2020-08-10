import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class CardapioService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'cardapio');
    }
}

sglanchoneteApp.service('CardapioService', CardapioService);
