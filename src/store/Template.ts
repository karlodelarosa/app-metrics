import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import * as Constants from "@/Domain/BaseConstants";
import store from "@/store";

export interface TemplateInterface {
  activeRoute: string;
  pageContent: string;
  systemSettingActiveComponent: any;
  isOpenConfirmModal: boolean;
  isOnSystemSettingBackgroundImage: boolean;
}

@Module({ dynamic: true, store, name: "Template", namespaced: true })
export class Template extends VuexModule implements TemplateInterface {
  activeRoute = "";
  pageContent = "";
  systemSettingActiveComponent = null;
  isOpenConfirmModal = false;
  isOnSystemSettingBackgroundImage = true;

  get isActiveDashboardPages() {
    return this.isActiveSupComponent;
  }
  get isActiveSupComponent() {
    return (
      this.pageContent === Constants.BASE_CONSTANTS.SUP_DASHBOARD ||
      this.pageContent === Constants.BASE_CONSTANTS.SUP_ADMIN_PANEL
    );
  }

  get supDashboard() {
    return this.pageContent === Constants.BASE_CONSTANTS.SUP_DASHBOARD;
  }

  get supAdminPage() {
    return this.pageContent === Constants.BASE_CONSTANTS.SUP_ADMIN_PANEL;
  }

  get isOn() {
    return {
      'system-setting-background': this.isOnSystemSettingBackgroundImage
    };
  }

  get isOnSystemSettingBackground() {
    return this.isOnSystemSettingBackgroundImage;
  }

  get isOpenConfirmationModal() {
    console.info(this.isOpenConfirmModal);
    return this.isOpenConfirmModal;
  }

  @Action({ rawError: true })
  public pageContentRequest(requestedContent: string) {
    this.SET_PAGE_CONTENT(requestedContent);
    localStorage.setItem("activePage", requestedContent);
  }

  @Mutation
  public SET_PAGE_CONTENT(payload: string) {
    this.pageContent = payload;
  }

  @Mutation
  public SET_ACTIVE_ROUTE(payload: string) {
    this.activeRoute = payload;
  }

  @Mutation
  public SET_CONFIRMATION_MODAL(payload:boolean) {
    this.isOpenConfirmModal = payload;
  }

  @Mutation
  public SET_SYSTEM_SETTING_BACKGROUND_IMAGE_STATUS () {
    this.isOnSystemSettingBackgroundImage = !this.isOnSystemSettingBackgroundImage;
  }
}

export default getModule(Template);
