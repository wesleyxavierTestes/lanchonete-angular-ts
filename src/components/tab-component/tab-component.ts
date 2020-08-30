import { LitElement, html, customElement } from 'lit-element';

@customElement('tab-componet')
class TabComponent extends LitElement {

    render() {
        return html`
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link"
                        ng-class="{ 'border border-bottom-dark text-secondary active' : view.viewIndexTab == 1 }"
                        id="nav-home-tab" data-toggle="tab" ng-click="view.viewSetTab(1);view.viewSetEntrada()" role="tab"
                        aria-controls="nav-home" aria-selected="true">Entrada</a>
                    <a class="nav-item nav-link"
                        ng-class="{ 'border border-bottom-dark text-secondary active': view.viewIndexTab == 2 }"
                        id="nav-home-tab" data-toggle="tab" ng-click="view.viewSetTab(2);view.viewSetSaida()" role="tab"
                        aria-controls="nav-home" aria-selected="true">Saída</a>
                </div>
            </nav>
            <div>
                <slot></slot>
            </div>
        </div>
        `;
    }

    createRenderRoot() { return this; }
}