import { 
    rotaFindAll, 
    rotaActive, 
    rotaDesactive, 
    rotaFind, 
    rotaNovo, 
    rotaFindAllFilter, 
    rotaSave, 
    rotaUpdate, 
    rotaSaveTipo,
    rotaUpdateTipo} from "../utils/HttpConfig";

export abstract class BaseService<T> {
    static $inject = ['$http'];
    CONFIG: { headers: {}; };
    constructor(protected $http, protected routeName: string) {
        this.CONFIG = {
            headers:    {             
                "content-type": "application/json",
                "access-control-allow-origin": "*",
            }
        };
    }

    findAll(page: number): Promise<{ data: { content: T[] } }> {
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

    findAllFilter(page: number, objeto: object): Promise<{ data: { content: T[] } }> {
        return this.$http.post(rotaFindAllFilter(this.routeName, page), JSON.stringify(objeto), this.CONFIG);
    }

    save(entity: T, tipo?: string): Promise<{ data: T }> {
        return this.$http.post(rotaSaveTipo(this.routeName, tipo), JSON.stringify(entity), this.CONFIG);
    }

    update(entity: T, tipo?: string): Promise<{ data: T }> {
        return this.$http.put(rotaUpdateTipo(this.routeName, tipo), JSON.stringify(entity), this.CONFIG);
    }

}