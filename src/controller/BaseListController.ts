import { IpaginateConfigure, Paginacao } from '../components/paginacao/paginacao';
export abstract class BaseListController<T> {

    public nome: string = "teste";
    public list: T[];
    public paginacaoConfig: IpaginateConfigure = Paginacao.default;
    
    constructor(protected service) {  
        this.findAll();
    }

    public viewPaginacaoChange(even: IpaginateConfigure) {
        this.paginacaoConfig = even;
        this.findAll();
    }

    public findAll() {
        if (!Paginacao.valido(this.paginacaoConfig)) return;
        this.service.findAll(this.paginacaoConfig.pageAtual)
            .then((resultado: any) => this.findAllTry(resultado));
    }

    private findAllTry(resultado: {
        data: {
            content: Array<any>;
            totalElements: number; totalPages: number;
            first: boolean; last: boolean;
        };
    }) {
        this.list = resultado.data.content;
        this.paginacaoConfig = Paginacao.configure(resultado.data, this.paginacaoConfig.pageAtual);
    }

    viewAlterar(id: number) {
        alert(id);
    }

    viewExcluir(id: number) {
        alert(id);
    }
}