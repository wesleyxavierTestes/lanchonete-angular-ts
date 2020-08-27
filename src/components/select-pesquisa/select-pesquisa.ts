import { IScope } from 'angular';
import sglanchoneteApp from "../../app";


interface ISelectPesquisa extends IScope {
    viewPesquisarItem: (event) => void;
    viewLimparSelecaoItem: () => void;
    viewSetItem: (item: any) => void;
    $ctrl: {
        value: string,
        required: boolean,
        pesquisarItem: (event?: any) => void,
        setItem: (event?: any) => void,
        list: any[]
    }
}

class SelectPesquisa {

    public itemFocus = false;
    public itemName: string = "";

    constructor(private $scope: ISelectPesquisa) {
        this.$scope.viewPesquisarItem = (event: KeyboardEvent) => {
            if (!!event && (<any>event.target).value && !!this.itemName) {
                this.$scope.$ctrl.setItem({ $event: null });
                this.$scope.$ctrl.list = [];
            }

            if (!event || event.keyCode === 13) {
                this.$scope.$ctrl.pesquisarItem({ $event: this.itemName ? this.itemName : "" });
                this.itemFocus = true;
            }
        }

        this.$scope.viewLimparSelecaoItem = () => {
            this.itemName = "";
            this.$scope.$ctrl.value = null;
            this.$scope.$ctrl.list = [];
        }

        this.$scope.viewSetItem = (item: any) => {
            this.$scope.$ctrl.setItem({ $event: item });
            this.itemFocus = false;
        }
    }
}

sglanchoneteApp.component('selectPesquisa', {
    template: require("./select-pesquisa.html"),
    controller: SelectPesquisa,
    bindings: {
        value: "=",
        required: "=",
        list: "=",

        pesquisarItem: '&',
        setItem: '&'
    }
});