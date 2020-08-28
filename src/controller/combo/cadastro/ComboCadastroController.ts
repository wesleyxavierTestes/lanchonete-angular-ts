import { IResponse } from "./../../../models/IResponse";
import sglanchoneteApp from '../../../app';
import { BaseCadastroController } from '../../BaseCadastroController';
import { BebidaModel } from '../../../models/bebida/BebidaModel';
import { BebidaService } from '../../../services/bebida/BebidaService';
import { ComboModel } from '../../../models/combo/ComboModel';
import { ComboService } from './../../../services/combo/ComboService';
import { IpaginateConfigure, Paginacao } from '../../../components/paginacao/paginacao';
import { LancheModel } from '../../../models/lanche/LancheModel';
import { LancheService } from '../../../services/lanche/LancheService';

export class ComboCadastroController extends BaseCadastroController<ComboModel, ComboService> {
    static $inject = ['ComboService', '$rootScope', '$state', '$location', 'BebidaService', 'LancheService'];
    public lanches: LancheModel[] = [];
    public bebidas: BebidaModel[] = [];

    public paginacaoLancheConfig: IpaginateConfigure = Paginacao.default;
    public paginacaoBebidaConfig: IpaginateConfigure = Paginacao.default;

    constructor(protected comboService: ComboService, protected $rootScope, protected state, 
        protected $location, private bebidaService: BebidaService, private lancheService: LancheService ) {
        super(comboService, $rootScope, state, $location);
        this.nome = 'Combo';
        this.viewLancheFindAll();
    }
    protected updateComponent() { }

    //#region LANCHE
    public viewPaginacaoLancheChange(even: IpaginateConfigure) {
        this.paginacaoLancheConfig = even;
        this.paginacaoLancheFindAll();
    }

    private paginacaoLancheFindAll() {
        if (!Paginacao.valido(this.paginacaoLancheConfig)) return;
        this.viewLancheFindAll();
    }

    public viewLancheFindAll() {
        this.$rootScope.$emit('loading', true);
        this.lancheService.findAll(this.paginacaoLancheConfig.pageAtual)
            .then((resultado) => this.findAllLancheTry(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }

    protected findAllLancheTry(resultado: IResponse<LancheModel>) {
        this.lanches = resultado.content;
        this.paginacaoLancheConfig = Paginacao.configure(resultado, this.paginacaoLancheConfig.pageAtual);
        this.$rootScope.$emit('loading', false);
    }
    public viewSelecionarLanche(id: number) {
        this.entity.viewSelecionarLanche(id, this.lanches);
    }

    public viewRemoverLanche(id: number) {
        this.entity.viewRemoverLanche(id);
    }

    public viewLanchesFilter() {
        return this.entity.lanchesFilter();
    }

    public viewDuplicarLanche(id: number) {
        this.entity.viewDuplicarLanche(id);
    }

    public viewUnicoLanche(id: number) {
        this.entity.viewUnicoLanche(id);
    }

    public viewLanchesFiltrado() {
        if (this.lanches)
            return this.lanches.filter(p =>
                !(this.entity.lanches
                    && this.entity.lanches.find(i => i.id === p.id)));
        return [];
    }

    public viewContarQuantidadeLanche(id) {
        this.entity.contarQuantidadeLanche(id);
    }
    //#endregion

    //#region BEBIDA
    public viewPaginacaoBebidaChange(even: IpaginateConfigure) {
        this.paginacaoBebidaConfig = even;
        this.paginacaoBebidaFindAll();
    }
    
    private paginacaoBebidaFindAll() {
        if (!Paginacao.valido(this.paginacaoBebidaConfig)) return;
        this.viewBebidaFindAll();
    }
    
    public viewBebidaFindAll() {
        this.$rootScope.$emit('loading', true);
        this.bebidaService.findAll(this.paginacaoBebidaConfig.pageAtual)
            .then((resultado) => this.findAllBebidaTry(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }
    
    protected findAllBebidaTry(resultado: IResponse<BebidaModel>) {
        this.bebidas = resultado.content;
        this.paginacaoBebidaConfig = Paginacao.configure(resultado, this.paginacaoBebidaConfig.pageAtual);
        this.$rootScope.$emit('loading', false);
    }

    public viewSelecionarBebida(id: number) {
        this.entity.viewSelecionarBebida(id, this.bebidas);
    }

    public viewRemoverBebida(id: number) {
        this.entity.viewRemoverBebida(id);
    }
    
    public viewBebidasFilter() {
        return this.entity.bebidasFilter();
    }

    public viewDuplicarBebida(id: number) {
        this.entity.viewDuplicarBebida(id);
    }

    public viewUnicoBebida(id: number) {
        this.entity.viewUnicoBebida(id);
    }

    public viewBebidasFiltrado() {
        if (this.bebidas)
            return this.bebidas.filter(p =>
                !(this.entity.bebidas
                    && this.entity.bebidas.find(i => i.id === p.id)));
        return [];
    }

    public viewContarQuantidadeBebida(id) {
        this.entity.contarQuantidadeBebida(id);
    }
    //#endregion
}
sglanchoneteApp.component('combocadastro',
    {
        controller: ComboCadastroController,
        bindings: {
            entity: '<',
            editar: '<'
        },
        controllerAs: 'view',
        template: require('./combo.cadastro.html')
    });