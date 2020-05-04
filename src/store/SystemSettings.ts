import {
    Mutation,
    Action,
    VuexModule,
    getModule,
    Module
} from "vuex-module-decorators";
import store from "@/store/index";

export interface SystemSettingsInterface {
    activeSidebarItem:string
}

@Module({ dynamic: true, store, name: "SystemSettings", namespaced: true })
export class SystemSettings extends VuexModule implements SystemSettingsInterface {
    activeSidebarItem = "system";

    get getActiveSidebarItem() {
        return this.activeSidebarItem;
    }

    @Mutation
    public SET_ACTIVE_SIDEBAR_ITEM (payload:string) {
        this.activeSidebarItem = payload;
    }
}

export default getModule(SystemSettings);
