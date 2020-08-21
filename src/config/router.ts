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
            template: 'Home'
        })

        .when("/cliente/list", {
            template: '<clientelist></clientelist>'
        })
        .when("/cliente/cadastro", {
            template: '<clientecadastro></clientecadastro>',
            resolve: {
                editar: () => false,
                find: function (ClienteService) {
                    return ClienteService.novo();
                }
            }
        })
        .when("/cliente/editacao", {
            template: '<clientecadastro></clientecadastro>',
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
            template: '<categorialist></categorialist>'
        })
        .when("/categoria/cadastro", {
            template: '<categoriacadastro></categoriacadastro>',
            resolve: {
                editar: () => false,
                find: function (CategoriaService) {
                    return CategoriaService.novo();
                }
            }
        })
        .when("/categoria/editacao", {
            template: '<categoriacadastro></categoriacadastro>',
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
            template: '<produtolist></produtolist>'
        })
        .when("/produto/cadastro", {
            template: '<produtocadastro></produtocadastro>',
            resolve: {
                editar: () => false,
                find: function (ProdutoService) {
                    return ProdutoService.novo();
                }
            }
        })
        .when("/produto/editacao", {
            template: '<produtocadastro></produtocadastro>',
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
            template: '<cardapiolist></cardapiolist>'
        })
        .when("/cardapio/cadastro", {
            template: '<cardapiocadastro></cardapiocadastro>',
            resolve: {
                editar: () => false,
                find: function (CardapioService) {
                    return CardapioService.novo();
                }
            }
        })
        .when("/cardapio/editacao", {
            template: '<cardapiocadastro></cardapiocadastro>',
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
            template: '<combolist></combolist>'
        })
        .when("/combo/cadastro", {
            template: '<combocadastro></combocadastro>',
            resolve: {
                editar: () => false,
                find: function (ComboService) {
                    return ComboService.novo();
                }
            }
        })
        .when("/combo/editacao", {
            template: '<combocadastro></combocadastro>',
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
            template: '<estoquelist></estoquelist>'
        })
        .when("/estoque/cadastro", {
            template: '<estoquecadastro></estoquecadastro>',
            resolve: {
                editar: () => false,
                find: function (EstoqueService) {
                    return EstoqueService.novo();
                }
            }
        })
        .when("/estoque/editacao", {
            template: '<estoquecadastro></estoquecadastro>',
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
            template: '<lanchelist></lanchelist>'
        })
        .when("/lanche/cadastro", {
            template: '<lanchecadastro></lanchecadastro>',
            resolve: {
                editar: () => false,
                find: function (LancheService) {
                    return LancheService.novo();
                }
            }
        })
        .when("/lanche/editacao", {
            template: '<lanchecadastro></lanchecadastro>',
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
            template: '<pedidolist></pedidolist>'
        })
        .when("/pedido/cadastro", {
            template: '<pedidocadastro></pedidocadastro>',
            resolve: {
                editar: () => false,
                find: function (PedidoService) {
                    return PedidoService.novo();
                }
            }
        })
        .when("/pedido/editacao", {
            template: '<pedidocadastro></pedidocadastro>',
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
            template: '<vendalist></vendalist>'
        })
        .when("/venda/cadastro", {
            template: '<vendacadastro></vendacadastro>',
            resolve: {
                editar: () => false,
                find: function (VendaService) {
                    return VendaService.novo();
                }
            }
        })
        .when("/venda/editacao", {
            template: '<vendacadastro></vendacadastro>',
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