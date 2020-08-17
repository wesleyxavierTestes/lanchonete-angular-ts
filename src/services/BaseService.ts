import { rotaConfig } from "../utils/HttpConfig";

export abstract class BaseService {
    static $inject = ['$http'];
    constructor(protected $http, protected routeName: string) {
        
    }

    findAll(page: number) {
        var CONFIG = {
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        }
        return this.$http.get(rotaConfig(this.routeName, page));
    }
}