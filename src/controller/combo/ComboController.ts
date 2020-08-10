import sglanchoneteApp from "../../app";

class ComboListController {
    static $inject = ['ComboService'];

    nome: string;
    list: any;
    
    constructor(private comboService) {
        this.nome = 'Combo';
        this.comboService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('ComboListController', ComboListController);