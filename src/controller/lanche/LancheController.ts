import sglanchoneteApp from "../../app";

class LancheListController {
    static $inject = ['LancheService'];

    nome: string;
    list: any;
    
    constructor(private lancheService) {
        this.nome = 'Lanche';
        this.lancheService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('LancheListController', LancheListController);