import { 
    rotaFindAll, 
    rotaActive, 
    rotaDesactive, 
    rotaFind, 
    rotaNovo, 
    rotaFindAllFilter, 
    rotaSave, 
    rotaUpdate } from "../utils/HttpConfig";

export abstract class BaseService<T> {
    static $inject = ['$http'];
    CONFIG: { headers: { "content-type": string; }; };
    constructor(protected $http, protected routeName: string) {
        this.CONFIG = {
            headers: {
                "content-type": "application/json"
            }
        };
    }

    findAll(page: number): Promise<{ data: T }> {
        return this.$http.get(rotaFindAll(this.routeName, page), this.CONFIG);
    }

    active(id: number): Promise<{ data: T }> {
        return this.$http.delete(rotaActive(this.routeName, id), this.CONFIG);
    }

    desactive(id: number): Promise<{ data: T }> {
        return this.$http.delete(rotaDesactive(this.routeName, id), this.CONFIG);
    }

    delete(id: number): Promise<{ data: T }> {
        return this.$http.delete(rotaDesactive(this.routeName, id), this.CONFIG);
    }

    find(id: string): Promise<{ data: T }> {
        return this.$http.get(rotaFind(this.routeName, id), this.CONFIG);
    }

    novo(): Promise<{ data: T }> {
        return this.$http.get(rotaNovo(this.routeName), this.CONFIG);
    }

    findAllFilter(page: number, objeto: object): Promise<{ data: T }> {
        return this.$http.post(rotaFindAllFilter(this.routeName, page), JSON.stringify(objeto));
    }

    save(entity: T): Promise<{ data: T }> {
        return this.$http.post(rotaSave(this.routeName), JSON.stringify(entity));
    }

    update(entity: T): Promise<{ data: T }> {
        return this.$http.put(rotaUpdate(this.routeName), JSON.stringify(entity));
    }

}