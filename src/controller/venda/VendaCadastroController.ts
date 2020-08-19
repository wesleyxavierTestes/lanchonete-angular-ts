import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class VendaCadastroController extends BaseCadastroController<any> {
    static $inject = ['VendaService', '$scope', '$route'];

    constructor(protected vendaService, protected $scope, protected $route) {
        super(vendaService, $scope, $route);
        this.nome = 'Venda';
    }

}
sglanchoneteApp.controller('VendaCadastroController', VendaCadastroController);