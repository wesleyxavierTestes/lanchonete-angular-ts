import sglanchoneteApp from "../../app";

// export class InputRgComponent {
//     ngModel: any;
//     entity: any;

//     constructor() {
        
//     }

//     $onInit() {
//       this.entity = this.ngModel;
//     }
// }
// const appRootConfigure = function () {
//     return {
//         template: `
//         <input type="text" class="form-control rg" id="id_rg" ng-required="!!view.erros.rg"
//             ng-value="$ctrl.entity" aria-describedby="RG do cliente" placeholder="">
//         `,
//         controller: InputRgComponent,
//         bindings: {
//             ngModel: '='
//         }
//     };
// };
// sglanchoneteApp.component('inputRg', appRootConfigure());

function listener() {
    return {
     link: function(scope, elem, attrs) {
       elem.bind("change", function(event) {
          scope.view.viewEvento(event.target.value);
          // event.preventDefault();
       });
     }
    }
  }
  
  sglanchoneteApp.directive('listener', listener);
    

import { LitElement, html } from 'lit-element';

class InputRg extends LitElement {
    static get properties() {
        return {
            value: { type: String }
        };
   }
   
   private value: string;
   
   constructor() {
    super();
    this.value = '';
  }


  render(){
    return html`
    <div class="form-group">
        <input type="text" class="form-control rg" id="id_rg" ng-required="!!view.erros.rg"
            @keyup="${e => this.valueChange(e) }"
             value="${ this.value }" aria-describedby="RG do cliente" placeholder="digite aqui">
      </div>
    `;
  }

    private valueChange(e: any) {
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('change', { detail: this.value }));
    }
}
customElements.define('input-rg', InputRg);