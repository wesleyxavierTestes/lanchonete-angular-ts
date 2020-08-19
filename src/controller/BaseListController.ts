import { IpaginateConfigure, Paginacao } from '../components/paginacao/paginacao';
import { BaseService } from '../services/BaseService';

export abstract class BaseListController<T, Y extends BaseService> {

    public usarAtivar = true;
    public pesquisaModel = '';
    public nome: string = "teste";
    public list: T[];
    public paginacaoConfig: IpaginateConfigure = Paginacao.default;
    
    constructor(protected service: Y, protected $scope) {  
        this.paginacaoFindAll();
    }

    public viewPaginacaoChange(even: IpaginateConfigure) {
        this.paginacaoConfig = even;
        this.paginacaoFindAll();
    }

    private paginacaoFindAll() {
        if (!Paginacao.valido(this.paginacaoConfig)) return;
        this.viewFindAll();
    }

    public viewFindAll() {
        this.$scope.$emit('loading', true);
        this.service.findAll(this.paginacaoConfig.pageAtual)
            .then((resultado: any) => this.findAllTry(resultado))
            .catch(error => this.$scope.$emit('loading', false));
    }

    protected findAllTry(resultado: {
        data: {
            content: Array<any>;
            totalElements: number; totalPages: number;
            first: boolean; last: boolean;
        };
    }) {
        this.list = resultado.data.content;
        this.paginacaoConfig = Paginacao.configure(resultado.data, this.paginacaoConfig.pageAtual);
        this.$scope.$emit('loading', false);
    }

    viewAlterar(id: number) {
        sessionStorage.setItem('id', id.toString());
        this.$scope.$emit('identificacao', id);
    }

    viewExcluir(id: number) {
        this.service.delete(id)
        .then((resultado: any) => this.findAllTry(resultado))
        .catch(error => this.$scope.$emit('loading', false));
    }

    public viewAtivacao(event: boolean, id: number) {
        this.$scope.$emit('loading', true);
        if (event) {
            this.service.active(id)
            .then((resultado: any) => this.viewFindAll())
                .finally(() => this.$scope.$emit('loading', false));
        } else { 
            this.service.desactive(id)
            .then((resultado: any) => this.viewFindAll())
            .finally(() => this.$scope.$emit('loading', false));
        }
    }

    public viewPesquisarNome(pesquisa) {
        this.pesquisaModel = pesquisa;
        this.$scope.$emit('loading', true);
        this.paginacaoConfig = Paginacao.default;
        this.service.findAllFilter(this.paginacaoConfig.pageAtual, { nome: this.pesquisaModel })
            .then((resultado: any) => this.findAllTry(resultado));
    }
}