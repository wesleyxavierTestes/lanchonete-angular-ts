import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";

export class ComboService extends BaseService {
    
    constructor(protected $http) {
        super($http, 'combo');
    }
}

sglanchoneteApp.service('ComboService', ComboService);