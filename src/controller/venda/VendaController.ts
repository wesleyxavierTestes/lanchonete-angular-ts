import sglanchoneteApp from "../../app";

class VendaListController {
    static $inject = ['VendaService'];

    nome: string;
    list: any;
    
    constructor(private vendaService) {
        this.nome = 'Venda';
        this.vendaService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('VendaListController', VendaListController);