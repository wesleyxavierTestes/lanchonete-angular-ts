import sglanchoneteApp from "../../app";
import { BaseService } from "../BaseService";
import { ComboModel } from '../../models/combo/ComboModel';

export class ComboService extends BaseService<ComboModel> {
    
    constructor(protected $http) {
        super($http, 'combo');
    }
}

sglanchoneteApp.service('ComboService', ComboService);