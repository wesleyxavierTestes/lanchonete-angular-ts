import { EntityBase } from './../models/BaseModel';
import { IResponse } from "./../models/IResponse";
import { IpaginateConfigure, Paginacao } from '../components/paginacao/paginacao';
import { BaseService } from '../services/BaseService';
import angular from 'angular';

export class BaseListController<T extends EntityBase, Y extends BaseService<T>>  {

    public usarAtivar = true;
    public pesquisaModel = '';
    public nome: string = "teste";
    public list: T[];
    public paginacaoConfig: IpaginateConfigure = Paginacao.default;

    constructor(protected service: Y, protected $rootScope, protected $scope) {
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
        this.$rootScope.$emit('loading', true);
        this.service.findAll(this.paginacaoConfig.pageAtual)
            .then((resultado) => this.findAllTry(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }

    protected findAllTry(resultado: IResponse<T>) {
        this.list = resultado.content;
        this.paginacaoConfig = Paginacao.configure(resultado, this.paginacaoConfig.pageAtual);
        this.$rootScope.$emit('loading', false);
    }

    viewAlterar(id: number) {
        sessionStorage.setItem('id', id.toString());
        this.$rootScope.$emit('identificacao', id);
    }

    viewExcluir(id: number) {
        this.service.delete(id)
            .then((resultado: any) => this.findAllTry(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }

    public viewAtivacao(event: boolean, id: number) {
        this.$rootScope.$emit('loading', true);
        if (event) {
            this.service.active(id)
                .then((resultado: any) => this.viewFindAll())
                .finally(() => this.$rootScope.$emit('loading', false));
        } else {
            this.service.desactive(id)
                .then((resultado: any) => this.viewFindAll())
                .finally(() => this.$rootScope.$emit('loading', false));
        }
    }

    public viewPesquisarNome(pesquisa) {
        this.pesquisaModel = pesquisa;
        this.$rootScope.$emit('loading', true);
        this.paginacaoConfig = Paginacao.default;
        this.service.findAllFilter(this.paginacaoConfig.pageAtual, { nome: this.pesquisaModel })
            .then((resultado: any) => this.findAllTry(resultado));
    }
}