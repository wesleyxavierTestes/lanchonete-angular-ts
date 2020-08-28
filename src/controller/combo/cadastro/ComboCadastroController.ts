import { ComboService } from './../../../services/combo/ComboService';
import sglanchoneteApp from "../../../app";
import { BaseCadastroController } from '../../BaseCadastroController';
import { ComboModel } from '../../../models/combo/ComboModel';
import { LancheModel } from '../../../models/lanche/LancheModel';
import { IpaginateConfigure, Paginacao } from '../../../components/paginacao/paginacao';
import { BebidaModel } from '../../../models/bebida/BebidaModel';
import numeral from 'numeral';
import { LancheService } from '../../../services/lanche/LancheService';
import { BebidaService } from '../../../services/bebida/BebidaService';

export class ComboCadastroController extends BaseCadastroController<ComboModel, ComboService> {
    static $inject = ['ComboService', '$rootScope', '$state', '$location', 'BebidaService', 'LancheService'];
    public lanches: LancheModel[];
    public bebidas: BebidaModel[];

    public paginacaoLancheConfig: IpaginateConfigure = Paginacao.default;
    public paginacaoBebidaConfig: IpaginateConfigure = Paginacao.default;

    constructor(protected comboService: ComboService, protected $rootScope, protected state, 
        protected $location, private bebidaService: BebidaService, private lancheService: LancheService ) {
        super(comboService, $rootScope, state, $location);
        this.nome = 'Combo';
        this.viewLancheFindAll();
    }
    protected updateComponent() { }

    ////#region LANCHE
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
            .then((resultado: any) => this.findAllLancheTry(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }

    protected findAllLancheTry(resultado: {
        data: {
            content: Array<any>;
            totalElements: number; totalPages: number;
            first: boolean; last: boolean;
        };
    }) {
        this.lanches = resultado.data.content;
        this.paginacaoLancheConfig = Paginacao.configure(resultado.data, this.paginacaoLancheConfig.pageAtual);
        this.$rootScope.$emit('loading', false);
    }
    public viewSelecionarLanche(index: number) {
        if (!this.entity.lanches || !Array.isArray(this.entity.lanches)) this.entity.lanches = [];
        const produto = this.lanches[index] as any;
        this.entity.lanches.push((produto));

        this.entity.valor =
            this.entity.lanches
            .reduce((valor, update) => numeral(valor).add(update.valor).value(), 0);

    }

    public viewRemoverLanche(id: number) {
        if (this.entity.lanches && Array.isArray(this.entity.lanches)) {
            this.entity.lanches = this.entity.lanches.filter(item => item.id !== id);
        }
    }

    public contarQuantidadeLanche(id) {
        if (this.entity.lanches && Array.isArray(this.entity.lanches))
            return this.entity.lanches.filter(ingrediente => ingrediente.id == id).length;
        return [];
    }

    public lanchesFilter() {
        if (this.entity.lanches && Array.isArray(this.entity.lanches))
            return this.entity.lanches.filter((value, index, self) => self.indexOf(value) === index);

        return [];
    }
    ////#endregion

    ////#region BEBIDA
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
            .then((resultado: any) => this.findAllBebidaTry(resultado))
            .catch(error => this.$rootScope.$emit('loading', false));
    }
    
    protected findAllBebidaTry(resultado: {
        data: {
            content: Array<any>;
            totalElements: number; totalPages: number;
            first: boolean; last: boolean;
        };
    }) {
        this.lanches = resultado.data.content;
        this.paginacaoBebidaConfig = Paginacao.configure(resultado.data, this.paginacaoBebidaConfig.pageAtual);
        this.$rootScope.$emit('loading', false);
    }

    public viewSelecionarBebida(index: number) {
        if (!this.entity.bebidas || !Array.isArray(this.entity.bebidas)) this.entity.bebidas = [];
        const produto = this.bebidas[index] as any;
        this.entity.bebidas.push((produto));

        this.entity.valor =
            this.entity.bebidas
            .reduce((valor, update) => numeral(valor).add(update.valor).value(), 0);

    }

    public viewRemoverBebida(id: number) {
        if (this.entity.bebidas && Array.isArray(this.entity.bebidas)) {
            this.entity.bebidas = this.entity.bebidas.filter(item => item.id !== id);
        }
    }
    
    public contarQuantidadeBebida(id) {
        if (this.entity.bebidas && Array.isArray(this.entity.bebidas))
            return this.entity.bebidas.filter(ingrediente => ingrediente.id == id).length;
        return [];
    }
    
    public bebidasFilter() {
        if (this.entity.bebidas && Array.isArray(this.entity.bebidas))
            return this.entity.bebidas.filter((value, index, self) => self.indexOf(value) === index);
    
        return [];
    }
    ////#endregion
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