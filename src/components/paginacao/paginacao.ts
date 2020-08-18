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
        template: `
            <nav aria-label="...">
                <ul class="pagination">
                    <li ng-class="{ 'disabled': config.paginationFirst}" class="page-item">
                        <button type="button" ng-disabled="config.paginationFirst" 
                        ng-click="viewPageNavigationAnterior()"
                            class="page-link">Anterior</button>
                    </li>
                    <li ng-repeat="page in config.pagination" ng-class="{'active': config.page == page}" class="page-item">
                        <a class="page-link" ng-click="viewPageNavigation(page)">{{page}}</a>
                    </li>
                    <li ng-class="{ 'disabled': config.paginationLast}" class="page-item">
                        <button type="button" ng-disabled="config.paginationLast" ng-click="viewPageNavigationProxima()"
                            class="page-link">Próxima</button>
                    </li>
                </ul>
            </nav>
        `,
        controller: Paginacao,
        scope: {
            config: '=',
            outChange: '&'
        }
    };
};
sglanchoneteApp.directive('paginacao', appRootConfigure);