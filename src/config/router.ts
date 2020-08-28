import { LancheModel } from './../models/lanche/LancheModel';
import { VendaService } from './../services/venda/VendaService';
import { PedidoService } from './../services/pedido/PedidoService';
import { LancheService } from './../services/lanche/LancheService';
import { EstoqueService } from './../services/estoque/EstoqueService';
import { ComboService } from './../services/combo/ComboService';
import { CardapioService } from './../services/cardapio/CardapioService';
import { ProdutoService } from './../services/produto/ProdutoService';
import { CategoriaService } from './../services/categoria/CategoriaService';
import { ClienteService } from './../services/cliente/ClienteService';
import sglanchoneteApp from "../app";
import { ClienteModel } from '../models/cliente/ClienteModel';
import { CategoriaModel } from '../models/categoria/CategoriaModel';
import { ProdutoModel } from '../models/produto/ProdutoModel';
import { CardapioModel } from '../models/cardapio/CardapioModel';
import { ComboModel } from '../models/combo/ComboModel';
import { EstoqueModel } from '../models/estoque/EstoqueModel';
import { PedidoModel } from '../models/pedido/PedidoModel';
import { VendaModel } from '../models/venda/VendaModel';

interface IStateProvider {
    state: (definations: {
        name: string;
        url: string;
        template?: string;
        templateUrl?: string;
        bindings?: Object;
        controller?: Object | Function;
        component?: Object | Function;
        resolve?: Object
    }) => IStateProvider;
}

export class AppRouter {

    static inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$rootScope'];
    private stateProvider: IStateProvider;


    constructor($stateProvider, $urlRouterProvider, $locationProvider) {
        this.stateProvider = $stateProvider;

        this.onInit();

        $urlRouterProvider.otherwise('/home');
        $locationProvider.hashPrefix = '';
    }

    private onInit() {
        this.stateProvider
            .state({
                name: 'home',
                url: '/home',
                component: 'homebase'
            })
            .state({
                url: "/cliente/list",
                name: 'clientelist',
                component: 'clientelist',
            })
            .state({
                url: "/cliente/cadastro",
                name: 'clientecadastro',
                component: 'clientecadastro',
                resolve: {
                    editar: () => false,
                    service: 'ClienteService',
                    entity: async function (service: ClienteService) {
                        return await service.novo().then(response => Object.assign(new ClienteModel(), response));
                    }
                }
            })
            .state({
                url: "/cliente/edicao",
                name: 'clienteedicao',
                component: 'clientecadastro',
                resolve: {
                    editar: () => true,
                    service: 'ClienteService',
                    entity: async function (service: ClienteService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new ClienteModel(), response));
                    }
                }
            })

            .state({
                url: "/categoria/list",
                name: 'categorialist',
                component: 'categorialist',
            })
            .state({
                url: "/categoria/cadastro",
                name: 'categoriacadastro',
                component: 'categoriacadastro',
                resolve: {
                    editar: () => false,
                    service: 'CategoriaService',
                    entity: async function (service: CategoriaService) {
                        return await service.novo().then(response => Object.assign(new CategoriaModel(), response));
                    }
                }
            })
            .state({
                url: "/categoria/edicao",
                name: 'categoriaedicao',
                component: 'categoriacadastro',
                resolve: {
                    editar: () => true,
                    service: 'CategoriaService',
                    entity: async function (service: CategoriaService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new CategoriaModel(), response));
                    }
                }
            })

            .state({
                url: "/produto/list",
                name: 'produtolist',
                component: 'produtolist',
            })
            .state({
                url: "/produto/cadastro",
                name: 'produtocadastro',
                component: 'produtocadastro',
                resolve: {
                    editar: () => false,
                    service: 'ProdutoService',
                    entity: async function (service: ProdutoService) {
                        return await service.novo().then(response => Object.assign(new ProdutoModel(), response));
                    }
                }
            })
            .state({
                url: "/produto/edicao",
                name: 'produtoedicao',
                component: 'produtocadastro',
                resolve: {
                    editar: () => true,
                    service: 'ProdutoService',
                    entity: async function (service: ProdutoService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new ProdutoModel(), response));
                    }
                }
            })

            .state({
                url: "/cardapio/list",
                name: 'cardapiolist',
                component: 'cardapiolist',
            })
            .state({
                url: "/cardapio/cadastro",
                name: 'cardapiocadastro',
                component: 'cardapiocadastro',
                resolve: {
                    editar: () => false,
                    service: 'CardapioService',
                    entity: async function (service: CardapioService) {
                        return await service.novo().then(response => Object.assign(new CardapioModel(), response));
                    }
                }
            })
            .state({
                url: "/cardapio/edicao",
                name: 'cardapioedicao',
                component: 'cardapiocadastro',
                resolve: {
                    editar: () => true,
                    service: 'CardapioService',
                    entity: async function (service: CardapioService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new CardapioModel(), response));
                    }
                }
            })

            .state({
                url: "/combo/list",
                name: 'combolist',
                component: 'combolist',
            })
            .state({
                url: "/combo/cadastro",
                name: 'combocadastro',
                component: 'combocadastro',
                resolve: {
                    editar: () => false,
                    service: 'ComboService',
                    entity: async function (service: ComboService) {
                        return await service.novo().then(response => Object.assign(new ComboModel(), response));
                    }
                }
            })
            .state({
                url: "/combo/edicao",
                name: 'comboedicao',
                component: 'combocadastro',
                resolve: {
                    editar: () => true,
                    service: 'ComboService',
                    entity: async function (service: ComboService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new ComboModel(), response));
                    }
                }
            })

            .state({
                url: "/estoque/list",
                name: 'estoquelist',
                component: 'estoquelist',
            })
            .state({
                url: "/estoque/cadastro",
                name: 'estoquecadastro',
                component: 'estoquecadastro',
                resolve: {
                    editar: () => false,
                    service: 'EstoqueService',
                    entity: async function (service: EstoqueService) {
                        return await service.novo().then(response => Object.assign(new EstoqueModel(), response));
                    }
                }
            })
            .state({
                url: "/estoque/edicao",
                name: 'estoqueedicao',
                component: 'estoquecadastro',
                resolve: {
                    editar: () => true,
                    service: 'EstoqueService',
                    entity: async function (service: EstoqueService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new EstoqueModel(), response));
                    }
                }
            })

            .state({
                url: "/lanche/list",
                name: 'lanchelist',
                component: 'lanchelist',
            })
            .state({
                url: "/lanche/cadastro",
                name: 'lanchecadastro',
                component: 'lanchecadastro',
                resolve: {
                    editar: () => false,
                    service: 'LancheService',
                    entity: async function (service: LancheService) {
                        return await service.novo().then(response => Object.assign(new LancheModel(), response));
                    }
                }
            })
            .state({
                url: "/lanche/edicao",
                name: 'lancheedicao',
                component: 'lanchecadastro',
                resolve: {
                    editar: () => true,
                    service: 'LancheService',
                    entity: async function (service: LancheService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new LancheModel(), response));
                    }
                }
            })

            .state({
                url: "/pedido/list",
                name: 'pedidolist',
                component: 'pedidolist',
            })
            .state({
                url: "/pedido/cadastro",
                name: 'pedidocadastro',
                component: 'pedidocadastro',
                resolve: {
                    editar: () => false,
                    service: 'PedidoService',
                    entity: async function (service: PedidoService) {
                        return await service.novo().then(response => Object.assign(new PedidoModel(), response));
                    }
                }
            })
            .state({
                url: "/pedido/edicao",
                name: 'pedidoedicao',
                component: 'pedidocadastro',
                resolve: {
                    editar: () => true,
                    service: 'PedidoService',
                    entity: async function (service: PedidoService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new PedidoModel(), response));
                    }
                }
            })

            .state({
                url: "/venda/list",
                name: 'vendalist',
                component: 'vendalist',
            })
            .state({
                url: "/venda/cadastro",
                name: 'vendacadastro',
                component: 'vendacadastro',
                resolve: {
                    editar: () => false,
                    service: 'VendaService',
                    entity: async function (service: VendaService) {
                        return await service.novo().then(response => Object.assign(new VendaModel(), response));
                    }
                }
            })
            .state({
                url: "/venda/edicao",
                name: 'vendaedicao',
                component: 'vendacadastro',
                resolve: {
                    editar: () => false,
                    service: 'VendaService',
                    entity: async function (service: VendaService, $rootScope) {
                        $rootScope.$on('identificacao', (event: any, data: any) => {
                            sessionStorage.setItem('id', data);
                        });
                        return await service.find(sessionStorage.getItem('id')).then(response => Object.assign(new VendaModel(), response));
                    }
                }
            })
    }
}

sglanchoneteApp.config(AppRouter);
