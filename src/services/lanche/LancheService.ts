import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { LancheModel } from '../../models/lanche/LancheModel';

export class LancheService extends BaseService<LancheModel> {
    
    constructor(protected $http) {
        super($http, 'lanche');
    }
}

sglanchoneteApp.service('LancheService', LancheService);