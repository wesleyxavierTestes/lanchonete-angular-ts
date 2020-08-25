import { html, css, LitElement, customElement, property, CSSResult, TemplateResult } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
@customElement('input-cnpj')
class InputCnpj extends LitElement {

  @property({ type: String }) value: string = null;
  @property({ type: String, attribute: true }) customclass = {};
  @property({ type: Boolean, attribute: true }) required: boolean = false;

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="form-group">
        <input type="text" class="${this.customclass}" 
            @keyup="${e => this.valueChange(e.target)}" required="${this.required}"
             value="${ this.value}" aria-describedby="CNPJ do cliente" placeholder="digite aqui">
      </div>
    `;
  }

  createRenderRoot() { return this; }
  formatarCNPJ(v: string) {

    // v = v.replace(/\D/g, "").replace(/^[a-z]{0,7}$/, '$1');

    // if (v.length > 9)
    //   v = v.substring(0, 9);

    // if (v.length === 8)
    //   v = v.replace(/(\d{1})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");

    // if (v.length === 9)
    //    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");

    return v.replace('$1', '');
  }

  private valueChange(e: any) {
    this.value = e.value = this.formatarCNPJ(e.value);
    this.value = this.value.replace(/\D/g, "");

    this.dispatchEvent(new CustomEvent('customrgchange', { detail: this.value }));
  }
}


