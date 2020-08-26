import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { CardapioModel } from '../../models/cardapio/CardapioModel';

export class CardapioService extends BaseService<CardapioModel> {
    
    constructor(protected $http) {
        super($http, 'cardapio');
    }
}

sglanchoneteApp.service('CardapioService', CardapioService);
