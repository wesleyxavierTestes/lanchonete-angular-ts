import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class ClienteCadastroController extends BaseCadastroController<any> {
    static $inject = ['ClienteService', '$scope', '$route'];

    rota = 'Cliente';

    constructor(protected clienteService, protected $scope, protected $route) {
        super(clienteService, $scope, $route);
        this.nome = 'Cliente';
    }


}
sglanchoneteApp.controller('ClienteCadastroController', ClienteCadastroController);
