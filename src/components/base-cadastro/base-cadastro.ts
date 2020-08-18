import sglanchoneteApp from "../../app";

export class BaseCadastro {

    constructor($scope: any) {
     }
}
const appRootConfigure = function () {
    return {
        template: `
        <div class="row lanc-list-break">
            <div class="col-3">
                <button type="button" class="btn btn-primary">
                    <a href="#!{{ nome | lowercase }}/cadastro">Novo</a>
                </button>
            </div>
            <div class="col-9">
                <ng-transclude></ng-transclude>
            </div>
        </div>
        <br>
        `,
        transclude: true,
        controller: BaseCadastro,
        scope: {
            nome: '='
        }
    };
};
sglanchoneteApp.directive('cadastro', appRootConfigure);