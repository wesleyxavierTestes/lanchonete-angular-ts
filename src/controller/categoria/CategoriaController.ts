import sglanchoneteApp from "../../app";

class CategoriaListController {
    static $inject = ['CategoriaService'];

    nome: string;
    list: any;
    
    constructor(private categoriaService) {
        this.nome = 'Categoria';
        this.categoriaService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('CategoriaListController', CategoriaListController);