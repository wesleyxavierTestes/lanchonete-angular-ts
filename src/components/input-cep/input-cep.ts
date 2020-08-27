import { html, css, LitElement, customElement, property, CSSResult, TemplateResult, internalProperty } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import * as _ from 'lodash';
import { EnderecoModel } from '../../models/cliente/EnderecoModel';
@customElement('input-cep')
class InputCep extends LitElement {

  @property({ type: String }) value: string = null;
  @property({ type: String, attribute: true }) customclass = {};
  @property({ type: Boolean, attribute: true }) required: boolean = false;
  @internalProperty() cep: EnderecoModel;

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="input-group mb-3">
      <input type="text" class="${this.customclass}" 
        @keyup="${e => this.valueChange(e.target)}" required="${this.required}"
        value="${ this.formatarCEP(this.value)}" aria-describedby="CEP do cliente" placeholder="digite aqui">
      <div class="input-group-append">
      <button type="button" @click="${e => this.getCep(e.target.value)}" style="border: none;"
        class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></button>
        </div>
    </div>
    `;
  }

  createRenderRoot() { return this; }
  formatarCEP(v: string) {

    v = v.replace(/\D/g, "").replace(/^[a-z]{0,8}$/, '$1');

    if (v.length > 8)
      v = v.substring(0, 8);

    if (v.length === 8)
      v = v.replace(/(\d{2})(\d{3})(\d{3})$/, "$1.$2-$3");

    return v.replace('$1', '');
  }

  private valueChange(e: any) {
    this.value = e.value = this.formatarCEP(e.value);
    this.value = this.value.replace(/\D/g, "");

    this.dispatchEvent(new CustomEvent('customcepchange', { detail: this.value }));
  }

  private getCep(value: string) {
    const tamanho = this.value.length;
    const estaVazio = _.isEmpty(this.value);
    const cep = this.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (!estaVazio && tamanho === 8) {
      this.dispatchEvent(new CustomEvent('customenderecocep', { detail: {} }));
      fetch(url)
        .then(reponse => reponse.json())
        .then((cep: EnderecoModel) => {
          this.cep = cep;
          this.dispatchEvent(new CustomEvent('customenderecocep', { detail: this.cep }))
        })
        .catch(error => {
          this.cep = {} as EnderecoModel;
          console.log(error);
        })
        .finally(() => { })
    }
  }
}


