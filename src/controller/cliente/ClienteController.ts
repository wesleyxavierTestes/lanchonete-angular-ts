import sglanchoneteApp from "../../app";

class ClienteListController {
    static $inject = ['ClienteService'];

    nome: string;
    list: any;
    
    constructor(private clienteService) {
        this.nome = 'Cliente';
        this.clienteService.findAll()
            .then(resultado => {
                this.list = resultado.data
            })
    }

}
sglanchoneteApp.controller('ClienteListController', ClienteListController);