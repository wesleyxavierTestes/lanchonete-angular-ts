import sglanchoneteApp from "../../app";

interface IPaginacao {
    config: any;
    outChange: Function;
    viewPageNavigationAnterior: Function;
    viewPageNavigationProxima: Function;
    viewPageNavigation: Function;
}

export interface IpaginateConfigure {
    pageAtual: number;
    page: number;
    totalPages?: number;
    numberOfElements?: number;
    totalElements?: number;
    paginationFirst?: boolean;
    paginationLast?: boolean;
    pagination?: number[];
}

export class Paginacao {
    public static default = { page: 0, pageAtual: 1 };

    constructor($scope) {
        $scope.viewPageNavigationAnterior = () => {
            $scope.config.pageAtual -= 1;
            $scope.outChange({ $event: $scope.config });
        }

        $scope.viewPageNavigationProxima = () => {
            $scope.config.pageAtual += 1;
            $scope.outChange({ $event: $scope.config });
        }

        $scope.viewPageNavigation = (page) => {
            $scope.config.pageAtual = page;
            $scope.outChange({ $event: $scope.config });
        }
    }
    public static valido(paginacaoConfig: any) {
        let valido = !(!!paginacaoConfig && paginacaoConfig.pageAtual == paginacaoConfig.page);
        return valido;
    }

    public static configure(data: any, pageAtual: number) {

        let pagination = [];
        for (let index = 1; index <= data.totalPages; index++) {
            pagination.push(index);
        }

        return {
            page: pageAtual,
            pageAtual: pageAtual,
            totalPages: data.totalPages,
            numberOfElements: data.numberOfElements,
            totalElements: data.totalElements,
            paginationFirst: data.first,
            paginationLast: data.last,
            pagination: pagination.slice(
                pageAtual == 1 ? (pageAtual - 1) : pageAtual - 2, 
                pageAtual == 1 ? (pageAtual + 2) : (pageAtual + 1))
        }
    }
}
const appRootConfigure = function () {
    return {
        templateUrl: './components/paginacao/paginacao.html',
        controller: Paginacao,
        scope: {
            config: '=',
            outChange: '&'
        }
    };
};
sglanchoneteApp.directive('paginacao', appRootConfigure);