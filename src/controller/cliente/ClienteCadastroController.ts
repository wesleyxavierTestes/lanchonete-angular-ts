import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

class ClienteCadastroController extends BaseCadastroController<any> {
    static $inject = ['ClienteService', '$scope'];

    rota = 'Cliente';

    constructor(protected clienteService, protected $scope ) {
        super(clienteService, $scope);
        this.nome = 'Cliente';
    }

    
}
sglanchoneteApp.controller('ClienteCadastroController', ClienteCadastroController);
