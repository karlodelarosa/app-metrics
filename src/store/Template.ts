import { Mutation, Action, VuexModule, getModule, Module } from "vuex-module-decorators";
import store from "@/store";

export interface TemplateInterface {
    themeColorMode: string,
    pageContent: string
}

@Module({ dynamic: true, store, name: 'Template', namespaced: true })
export class Template extends VuexModule implements TemplateInterface {
    themeColorMode = "light";
    pageContent = "";

    get getColorTheme () { return this.themeColorMode; }
    get getActivePage() { return this.pageContent; }
    get isDashboard() { return this.pageContent === "dashboard"; }

    @Action({ rawError: true })
    public pageContentRequest(requestedContent:string) {
        this.SET_PAGE_CONTENT(requestedContent);
        localStorage.setItem("activePage", requestedContent);
    }

    @Mutation
    public SET_THEME_COLOR_MODE (payload:string) {
        this.themeColorMode = payload;
    }

    @Mutation
    public SET_PAGE_CONTENT (payload:string) {
        this.pageContent = payload;
    }
}

export default getModule(Template)

