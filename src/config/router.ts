import { VendaCadastroController } from './../controller/venda/VendaCadastroController';
import { VendaListController } from './../controller/venda/VendaListController';
import { PedidoCadastroController } from './../controller/pedido/PedidoCadastroController';
import { PedidoListController } from './../controller/pedido/PedidoListController';
import { LancheCadastroController } from './../controller/lanche/LancheCadastroController';
import { LancheListController } from './../controller/lanche/LancheListController';
import { EstoqueCadastroController } from './../controller/estoque/EstoqueCadastroController';
import { EstoqueListController } from './../controller/estoque/EstoqueListController';
import { ComboCadastroController } from './../controller/combo/ComboCadastroController';
import { ComboListController } from './../controller/combo/ComboListController';
import { CardapioCadastroController } from './../controller/cardapio/CardapioCadastroController';
import { CardapioListController } from './../controller/cardapio/CardapioListController';
import { ProdutoCadastroController } from './../controller/produto/ProdutoCadastroController';
import { ProdutoListController } from './../controller/produto/ProdutoListController';
import { ClienteCadastroController } from './../controller/cliente/ClienteCadastroController';
import { ClienteListController } from './../controller/cliente/ClienteListController';
import { CategoriaListController } from './../controller/categoria/CategoriaListController';
import { CategoriaCadastroController } from './../controller/categoria/CategoriaCadastroController';
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

sglanchoneteApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            template: require('./../views/home.html')
        })

        .when("/cliente/list", {
            template: require('./../views/cliente/cliente.list.html'),
            controllerAs: 'view',
            controller: ClienteListController.prototype.constructor.name,
        })
        .when("/cliente/cadastro", {
            template: require('./../views/cliente/cliente.cadastro.html'),
            controllerAs: 'view',
            controller: ClienteCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (ClienteService) {
                    return ClienteService.novo();
                }
            }
        })
        .when("/cliente/editacao", {
            template: require('./../views/cliente/cliente.cadastro.html'),
            controllerAs: 'view',
            controller: ClienteCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (ClienteService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data)
                    });
                    return ClienteService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/categoria/list", {
            template: require('./../views/categoria/categoria.list.html'),
            controllerAs: 'view',
            controller: CategoriaListController.prototype.constructor.name,
        })
        .when("/categoria/cadastro", {
            template: require('./../views/categoria/categoria.cadastro.html'),
            controllerAs: 'view',
            controller: CategoriaCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (CategoriaService) {
                    return CategoriaService.novo();
                }
            }
        })
        .when("/categoria/editacao", {
            template: require('./../views/categoria/categoria.cadastro.html'),
            controllerAs: 'view',
            controller: CategoriaCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (CategoriaService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return CategoriaService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/produto/list", {
            template: require('./../views/produto/produto.list.html'),
            controllerAs: 'view',
            controller: ProdutoListController.prototype.constructor.name,
        })
        .when("/produto/cadastro", {
            template: require('./../views/produto/produto.cadastro.html'),
            controllerAs: 'view',
            controller: ProdutoCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (ProdutoService) {
                    return ProdutoService.novo();
                }
            }
        })
        .when("/produto/editacao", {
            template: require('./../views/produto/produto.cadastro.html'),
            controllerAs: 'view',
            controller: ProdutoCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (ProdutoService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return ProdutoService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/cardapio/list", {
            template: require('./../views/cardapio/cardapio.list.html'),
            controllerAs: 'view',
            controller: CardapioListController.prototype.constructor.name,
        })
        .when("/cardapio/cadastro", {
            template: require('./../views/cardapio/cardapio.cadastro.html'),
            controllerAs: 'view',
            controller: CardapioCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (CardapioService) {
                    return CardapioService.novo();
                }
            }
        })
        .when("/cardapio/editacao", {
            template: require('./../views/cardapio/cardapio.cadastro.html'),
            controllerAs: 'view',
            controller: CardapioCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (CardapioService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return CardapioService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/combo/list", {
            template: require('./../views/combo/combo.list.html'),
            controllerAs: 'view',
            controller: ComboListController.prototype.constructor.name,
        })
        .when("/combo/cadastro", {
            template: require('./../views/combo/combo.cadastro.html'),
            controllerAs: 'view',
            controller: ComboCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (ComboService) {
                    return ComboService.novo();
                }
            }
        })
        .when("/combo/editacao", {
            template: require('./../views/combo/combo.cadastro.html'),
            controllerAs: 'view',
            controller: ComboCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (ComboService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return ComboService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/estoque/list", {
            template: require('./../views/estoque/estoque.list.html'),
            controllerAs: 'view',
            controller: EstoqueListController.prototype.constructor.name,
        })
        .when("/estoque/cadastro", {
            template: require('./../views/estoque/estoque.cadastro.html'),
            controllerAs: 'view',
            controller: EstoqueCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (EstoqueService) {
                    return EstoqueService.novo();
                }
            }
        })
        .when("/estoque/editacao", {
            template: require('./../views/estoque/estoque.cadastro.html'),
            controllerAs: 'view',
            controller: EstoqueCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (EstoqueService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return EstoqueService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/lanche/list", {
            template: require('./../views/lanche/lanche.list.html'),
            controllerAs: 'view',
            controller: LancheListController.prototype.constructor.name,
        })
        .when("/lanche/cadastro", {
            template: require('./../views/lanche/lanche.cadastro.html'),
            controllerAs: 'view',
            controller: LancheCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (LancheService) {
                    return LancheService.novo();
                }
            }
        })
        .when("/lanche/editacao", {
            template: require('./../views/lanche/lanche.cadastro.html'),
            controllerAs: 'view',
            controller: LancheCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (LancheService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return LancheService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/pedido/list", {
            template: require('./../views/pedido/pedido.list.html'),
            controllerAs: 'view',
            controller: PedidoListController.prototype.constructor.name,
        })
        .when("/pedido/cadastro", {
            template: require('./../views/pedido/pedido.cadastro.html'),
            controllerAs: 'view',
            controller: PedidoCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (PedidoService) {
                    return PedidoService.novo();
                }
            }
        })
        .when("/pedido/editacao", {
            template: require('./../views/pedido/pedido.cadastro.html'),
            controllerAs: 'view',
            controller: PedidoCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => true,
                find: function (PedidoService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return PedidoService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/venda/list", {
            template: require('./../views/venda/venda.list.html'),
            controllerAs: 'view',
            controller: VendaListController.prototype.constructor.name,
        })
        .when("/venda/cadastro", {
            template: require('./../views/venda/venda.cadastro.html'),
            controllerAs: 'view',
            controller: VendaCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (VendaService) {
                    return VendaService.novo();
                }
            }
        })
        .when("/venda/editacao", {
            template: require('./../views/venda/venda.cadastro.html'),
            controllerAs: 'view',
            controller: VendaCadastroController.prototype.constructor.name,
            resolve: {
                editar: () => false,
                find: function (VendaService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return VendaService.find(sessionStorage.getItem('id'));
                }
            }
        })
        .otherwise("/home");
});