import { EntityBase } from './../models/BaseModel';
import { IResponse } from "./../models/IResponse";
import { IHttpService, IHttpPromise, IPromise, IHttpResponse } from 'angular';
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
    rotaUpdateTipo
} from "../utils/HttpConfig";

export abstract class BaseService<T extends EntityBase> {
    static $inject = ['$http'];
    CONFIG_TOKEN: { headers: {}; };
    CONFIG: { headers: { "content-type": string; "access-control-allow-origin": string; }; };
    constructor(protected $http: IHttpService, protected routeName: string) {

        this.CONFIG_TOKEN = {
            headers: {
                "content-type": "application/json",
                "access-control-allow-origin": "*",
                "Authorization": "Bearer " + localStorage.getItem('token'),
            }
        };
        this.CONFIG = {
            headers: {
                "content-type": "application/json",
                "access-control-allow-origin": "*"
            }
        };
    }

    protected catchCustom<T>(response: IHttpResponse<T>) {
        if (response.status == 0) { }

        return Promise.resolve((<T>response.data));
    }

    protected catchCustomSave<T>(response: IHttpResponse<T>, data: any) {
        if (response.status == 0) { }
        data.Notifications = response.data;
        return Promise.resolve((data));
    }

    findAll(page: number): IPromise<IResponse<T>> {
        return this.$http.get<T>(rotaFindAll(this.routeName, page), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((<any>response.data) as IResponse<T>))
            .catch((response: IHttpResponse<T>) => this.catchCustom<IResponse<T>>(response as any));
    }

    active(id: number): IPromise<T> {
        return this.$http.delete<T>(rotaActive(this.routeName, id), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustom(response));
    }

    desactive(id: number): IPromise<T> {
        return this.$http.delete<T>(rotaDesactive(this.routeName, id), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustom(response));
    }

    delete(id: number): IPromise<T> {
        return this.$http.delete<T>(rotaDesactive(this.routeName, id), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustom(response));
    }

    find(id: string): IPromise<T> {
        return this.$http.get<T>(rotaFind(this.routeName, id), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustom(response));
    }

    novo(): IPromise<T> {
        return this.$http.get<T>(rotaNovo(this.routeName), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustom(response));
    }

    findAllFilter(page: number, objeto: object): IPromise<T> {
        return this.$http.post<T>(rotaFindAllFilter(this.routeName, page), JSON.stringify(objeto), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustom(response));
    }

    save(entity: T, tipo?: string): IPromise<T> {
        return this.$http.post<T>(rotaSaveTipo(this.routeName, tipo), JSON.stringify(entity), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustomSave(response, entity));
    }

    update(entity: T, tipo?: string): IPromise<T> {
        return this.$http.put<T>(rotaUpdateTipo(this.routeName, tipo), JSON.stringify(entity), this.CONFIG_TOKEN)
            .then(response => Promise.resolve((response.data)))
            .catch((response: IHttpResponse<T>) => this.catchCustomSave(response, entity));
    }

}