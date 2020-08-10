import sglanchoneteApp from "../../app";

class EstoqueListController {
    static $inject = ['EstoqueService'];

    nome: string;
    list: any;
    
    constructor(private estoqueService) {
        this.nome = 'Estoque';
        this.estoqueService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('EstoqueListController', EstoqueListController);