import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from "vuex-module-decorators";
import store from "@/store/index";

export interface AccountsInterface {
  step: number;
  transitionName: string;
}

@Module({ dynamic: true, store, name: "Accounts", namespaced: true })
export class Accounts extends VuexModule implements AccountsInterface {
  step = 1;
  transitionName = "slide";

  get getCurrentStep() {
    return this.step;
  }
  get getTransitionName() {
    return this.transitionName;
  }

  @Action({ rawError: true })
  public nextStep() {
    if (this.step === 2) {
      this.CHANGE_TRANSITION_NAME("firstslide");
    }
    this.INCREMENT_STEP();
  }

  @Action({ rawError: true })
  public previousStep() {
    this.DECREMENT_STEP();
  }

  @Mutation
  public INCREMENT_STEP() {
    this.step++;
  }

  @Mutation
  public DECREMENT_STEP() {
    this.step--;
  }

  @Mutation
  public CHANGE_TRANSITION_NAME(payload: string) {
    this.transitionName = payload;
  }
}

export default getModule(Accounts);
