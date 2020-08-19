import { VendaService } from './../../services/venda/VendaService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class VendaCadastroController extends BaseCadastroController<any, VendaService> {
    static $inject = ['VendaService', '$scope', '$route'];

    constructor(protected vendaService: VendaService, protected $scope, protected $route) {
        super(vendaService, $scope, $route);
        this.nome = 'Venda';
     }
    protected updateComponent() {}
}
sglanchoneteApp.controller('VendaCadastroController', VendaCadastroController);