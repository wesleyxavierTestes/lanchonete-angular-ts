import sglanchoneteApp from "../../app";
import { IpaginateConfigure, Paginacao } from "../../components/paginacao/paginacao";

class ClienteListController {
    static $inject = ['ClienteService'];

    public nome: string;
    public list: any;
    public paginacaoConfig: IpaginateConfigure = Paginacao.default;

    constructor(private clienteService) {
        this.nome = 'Cliente';
        this.findAll();
    }

    public viewPaginacaoChange() {
        this.findAll();
    }

    public findAll() {
        if (!Paginacao.valido(this.paginacaoConfig)) return;

        this.clienteService.findAll(this.paginacaoConfig.pageAtual)
            .then((resultado: {
                data: {
                    content: Array<any>; totalElements: number; totalPages: number;
                    first: boolean, last: boolean
                };
            }) => {
                this.list = resultado.data.content;

                this.paginacaoConfig = Paginacao.configure(resultado.data, this.paginacaoConfig.pageAtual);
            });
    }

    viewAlterar(id: number) {
        alert(id);
    }

    viewExcluir(id: number) {
        alert(id);
    }
}
sglanchoneteApp.controller('ClienteListController', ClienteListController);
