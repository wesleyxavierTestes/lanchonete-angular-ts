import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { BebidaModel } from '../../models/bebida/BebidaModel';

export class BebidaService extends BaseService<BebidaModel> {
    constructor(protected $http) {
        super($http, 'bebida');
    }
}

sglanchoneteApp.service('BebidaService', BebidaService);
