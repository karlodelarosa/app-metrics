import { Mutation, Action, VuexModule, getModule, Module } from "vuex-module-decorators";
import * as Constants from "@/Domain/BaseConstants";
import store from "@/store";

export interface TemplateInterface {
    activeRoute: string,
    pageContent: string
}

@Module({ dynamic: true, store, name: 'Template', namespaced: true })
export class Template extends VuexModule implements TemplateInterface {
    activeRoute = "";
    pageContent = "";

    // get getColorTheme () { return this.themeColorMode; }
    get isActiveDashboardPages() {
        return this.isActiveSupComponent;
    }
    get isActiveSupComponent() {
        return this.pageContent === Constants.BASE_CONSTANTS.SUP_DASHBOARD ||
         this.pageContent === Constants.BASE_CONSTANTS.SUP_ADMIN_PANEL;
    }
    get getActivePage() { return this.pageContent; }
    get supDashboard() { return this.pageContent === Constants.BASE_CONSTANTS.SUP_DASHBOARD; }
    get supAdminPage() { return this.pageContent === Constants.BASE_CONSTANTS.SUP_ADMIN_PANEL; }

    get getActiveRoute() { return this.activeRoute; }

    @Action({ rawError: true })
    public pageContentRequest(requestedContent:string) {
        this.SET_PAGE_CONTENT(requestedContent);
        localStorage.setItem("activePage", requestedContent);
    }

    // @Mutation
    // public SET_THEME_COLOR_MODE (payload:string) {
    //     this.themeColorMode = payload;
    // }

    @Mutation
    public SET_PAGE_CONTENT (payload:string) {
        this.pageContent = payload;
    }

    @Mutation
    public SET_ACTIVE_ROUTE (payload:string) {
        this.activeRoute = payload;
    }
}

export default getModule(Template)

