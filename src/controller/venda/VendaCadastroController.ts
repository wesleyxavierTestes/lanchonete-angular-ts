import { VendaService } from './../../services/venda/VendaService';
import sglanchoneteApp from "../../app";
import { BaseCadastroController } from '../BaseCadastroController';

export class VendaCadastroController extends BaseCadastroController<any, VendaService> {
    static $inject = ['VendaService', '$scope', '$route', '$location'];

    constructor(protected vendaService: VendaService, protected $scope, protected $route, protected $location) {
        super(vendaService, $scope, $route, $location);
        this.nome = 'Venda';
     }
    protected updateComponent() {}
}
sglanchoneteApp.controller('VendaCadastroController', VendaCadastroController);