import { html, css, LitElement, customElement, property, CSSResult, TemplateResult, internalProperty } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import * as _ from 'lodash';
import { EnderecoModel } from '../../models/cliente/EnderecoModel';
@customElement('input-cnpj')
class InputCnpj extends LitElement {

  @property({ type: String }) value: string = null;
  @property({ type: String, attribute: true }) customclass = {};

  @property({ type: String, attribute: true }) placeholder: string = "...";
  @property({ type: Boolean, attribute: true }) required: boolean = false;
  @internalProperty() cnpj: EnderecoModel;

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="input-group mb-3">
        <input type="text" 
          class="${this.customclass}" 
          @keyup="${e => this.valueChange(e.target)}" required="${this.required}"
          value="${ this.formatarCNPJ(this.value)}" aria-describedby="CNPJ do cliente" 
          @placeholder="${this.placeholder}">
        <div class="input-group-append">
          <button type="button" @click="${e => this.getCnpj(e.target.value)}" style="border: none;"
            class="input-group-text" id="basic-addon2">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    `;
  }

  createRenderRoot() { return this; }
  formatarCNPJ(v: string) {

    v = v.replace(/\D/g, "").replace(/^[a-z]{0,14}$/, '$1');

    if (v.length > 14)
      v = v.substring(0, 14);

    if (v.length === 14)
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");

    return v.replace('$1', '');
  }

  private valueChange(e: any) {
    this.value = e.value = this.formatarCNPJ(e.value);
    this.value = this.value.replace(/\D/g, "");

    this.dispatchEvent(new CustomEvent('customcnpjchange', { detail: this.value }));
  }

  private getCnpj(value: string) {
    const tamanho = this.value.length;
    const estaVazio = _.isEmpty(this.value);
    const cnpj = this.value;
    const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;
    if (!estaVazio && tamanho === 14) {
      this.dispatchEvent(new CustomEvent('customenderecocnpj', { detail: {} }));
      fetch(url)
        .then(reponse => reponse.json())
        .then((cnpj: EnderecoModel) => {
          this.cnpj = cnpj;
          this.dispatchEvent(new CustomEvent('customenderecocnpj', { detail: this.cnpj }))
        })
        .catch(error => {
          this.cnpj = {} as EnderecoModel;
          console.log(error);
        })
        .finally(() => { })
    }
  }
}


