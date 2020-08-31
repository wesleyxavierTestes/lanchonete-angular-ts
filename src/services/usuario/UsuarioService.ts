import { UsuarioModel } from './../../models/usuario/Usuario';
import { BaseService } from "../BaseService";
import { IHttpService, IHttpResponse } from 'angular';
import { rotaLogin } from '../../utils/HttpConfig';

export class UsuarioService extends BaseService<UsuarioModel> {

    constructor(protected $http: IHttpService, protected routeName: string) {
        super($http, name);
    }
    
    public login(login: UsuarioModel) {
        this.$http.post(rotaLogin(), JSON.stringify(login), this.CONFIG)
            .then(response => {
                localStorage.setItem('token', (<any>response.data).token);
                Promise.resolve((response.status = 200));
            })
            .catch((response: IHttpResponse<any>) => this.catchCustomSave(response, login));
    }
}