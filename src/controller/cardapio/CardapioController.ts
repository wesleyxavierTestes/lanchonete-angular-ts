import sglanchoneteApp from "../../app";

class CardapioListController {
    static $inject = ['CardapioService'];

    nome: string;
    list: any;
    
    constructor(private cardapioService) {
        this.nome = 'Cardapio';
        this.cardapioService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('CardapioListController', CardapioListController);
