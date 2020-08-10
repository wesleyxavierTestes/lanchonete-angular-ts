import sglanchoneteApp from "../../app";

class PedidoListController {
    static $inject = ['PedidoService'];

    nome: string;
    list: any;
    
    constructor(private pedidoService) {
        this.nome = 'Pedido';
        this.pedidoService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('PedidoListController', PedidoListController);