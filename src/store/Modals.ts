import {
    Mutation,
    Action,
    VuexModule,
    getModule,
    Module
} from "vuex-module-decorators";
import store from "@/store/index";

export interface ModalsInterface {
    addAccountModal:boolean
}

@Module({ dynamic: true, store, name: "Modals", namespaced: true })
export class Modals extends VuexModule implements ModalsInterface {
    addAccountModal = false;

    get getAddAccountModal() {
        return this.addAccountModal;
    }

    @Mutation
    public SET_ADD_ACCOUNT_MODAL_VISIBILITY (payload:boolean) {
        this.addAccountModal = payload;
    }
}

export default getModule(Modals);
