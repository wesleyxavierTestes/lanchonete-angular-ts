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
            templateUrl: './../views/home.html'
        })

        .when("/cliente/list", {
            templateUrl: './../views/cliente/cliente.list.html'
        })
        .when("/cliente/cadastro", {
            templateUrl: './../views/cliente/cliente.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (ClienteService) {
                    return ClienteService.novo();
                }
            }
        })
        .when("/cliente/editacao", {
            templateUrl: './../views/cliente/cliente.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (ClienteService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data)
                    });
                    return ClienteService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/categoria/list", {
            templateUrl: './../views/categoria/categoria.list.html'
        })
        .when("/categoria/cadastro", {
            templateUrl: './../views/categoria/categoria.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (CategoriaService) {
                    return CategoriaService.novo();
                }
            }
        })
        .when("/categoria/editacao", {
            templateUrl: './../views/categoria/categoria.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (CategoriaService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return CategoriaService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/produto/list", {
            templateUrl: './../views/produto/produto.list.html'
        })
        .when("/produto/cadastro", {
            templateUrl: './../views/produto/produto.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (ProdutoService) {
                    return ProdutoService.novo();
                }
            }
        })
        .when("/produto/editacao", {
            templateUrl: './../views/produto/produto.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (ProdutoService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return ProdutoService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/cardapio/list", {
            templateUrl: './../views/cardapio/cardapio.list.html'
        })
        .when("/cardapio/cadastro", {
            templateUrl: './../views/cardapio/cardapio.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (CardapioService) {
                    return CardapioService.novo();
                }
            }
        })
        .when("/cardapio/editacao", {
            templateUrl: './../views/cardapio/cardapio.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (CardapioService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return CardapioService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/combo/list", {
            templateUrl: './../views/combo/combo.list.html'
        })
        .when("/combo/cadastro", {
            templateUrl: './../views/combo/combo.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (ComboService) {
                    return ComboService.novo();
                }
            }
        })
        .when("/combo/editacao", {
            templateUrl: './../views/combo/combo.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (ComboService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return ComboService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/estoque/list", {
            templateUrl: './../views/estoque/estoque.list.html'
        })
        .when("/estoque/cadastro", {
            templateUrl: './../views/estoque/estoque.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (EstoqueService) {
                    return EstoqueService.novo();
                }
            }
        })
        .when("/estoque/editacao", {
            templateUrl: './../views/estoque/estoque.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (EstoqueService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return EstoqueService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/lanche/list", {
            templateUrl: './../views/lanche/lanche.list.html'
        })
        .when("/lanche/cadastro", {
            templateUrl: './../views/lanche/lanche.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (LancheService) {
                    return LancheService.novo();
                }
            }
        })
        .when("/lanche/editacao", {
            templateUrl: './../views/lanche/lanche.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (LancheService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return LancheService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/pedido/list", {
            templateUrl: './../views/pedido/pedido.list.html'
        })
        .when("/pedido/cadastro", {
            templateUrl: './../views/pedido/pedido.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (PedidoService) {
                    return PedidoService.novo();
                }
            }
        })
        .when("/pedido/editacao", {
            templateUrl: './../views/pedido/pedido.cadastro.html',
            resolve: {
                editar: () => true,
                entity: function (PedidoService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return PedidoService.find(sessionStorage.getItem('id'));
                }
            }
        })

        .when("/venda/list", {
            templateUrl: './../views/venda/venda.list.html'
        })
        .when("/venda/cadastro", {
            templateUrl: './../views/venda/venda.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (VendaService) {
                    return VendaService.novo();
                }
            }
        })
        .when("/venda/editacao", {
            templateUrl: './../views/venda/venda.cadastro.html',
            resolve: {
                editar: () => false,
                entity: function (VendaService, $rootScope) {
                    $rootScope.$on('identificacao', (event: any, data: any) => {
                        sessionStorage.setItem('id', data);
                    });
                    return VendaService.find(sessionStorage.getItem('id'));
                }
            }
        })
        .otherwise("/");
});