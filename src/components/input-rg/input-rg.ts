import sglanchoneteApp from "../../app";

export class InputRgComponent {
    ngModel: any;
    entity: any;

    constructor() {
        
    }

    $onInit() {
      this.entity = this.ngModel;
    }
}
const appRootConfigure = function () {
    return {
        template: `
        <input type="text" class="form-control rg" id="id_rg" ng-required="!!view.erros.rg"
            ng-value="$ctrl.entity" aria-describedby="RG do cliente" placeholder="">
        `,
        controller: InputRgComponent,
        bindings: {
            ngModel: '='
        }
    };
};
sglanchoneteApp.component('inputRg', appRootConfigure());