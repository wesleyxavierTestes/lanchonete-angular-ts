import sglanchoneteApp from "../../app";

class ProdutoListController {
    static $inject = ['ProdutoService'];

    nome: string;
    list: any;
    
    constructor(private podutoService) {
        this.nome = 'Produto';
        this.podutoService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('ProdutoListController', ProdutoListController);