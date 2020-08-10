import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class LancheService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'lanche');
    }
}

sglanchoneteApp.service('LancheService', LancheService);