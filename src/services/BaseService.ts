import { rotaFindAll, rotaActive, rotaDesactive, rotaFind, rotaNovo } from "../utils/HttpConfig";

export abstract class BaseService {


    static $inject = ['$http'];
    CONFIG: { headers: { "content-type": string; }; };
    constructor(protected $http, protected routeName: string) {
        this.CONFIG = {
            headers: {
                "content-type": "application/json"
            }
        };
    }

    findAll(page: number): Promise<any> {
        return this.$http.get(rotaFindAll(this.routeName, page), this.CONFIG);
    }

    active(id: number): Promise<any> {
        return this.$http.delete(rotaActive(this.routeName, id), this.CONFIG);
    }

    desactive(id: number): Promise<any> {
        return this.$http.delete(rotaDesactive(this.routeName, id), this.CONFIG);
    }

    delete(id: number): Promise<any> {
        return this.$http.delete(rotaDesactive(this.routeName, id), this.CONFIG);
    }

    find(id: string) {
        return this.$http.get(rotaFind(this.routeName, id), this.CONFIG);
    }
    novo() {
        return this.$http.get(rotaNovo(this.routeName), this.CONFIG);
    }
}