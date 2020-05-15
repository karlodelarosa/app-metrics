<template>
  <div>
    <div style="min-height: 500px">
      <div class="flex flex-col border-b border-gray-300 mb-8">
        <div class="text-center pb-4 ">
<!--          <font-awesome-icon :icon="['fas', 'user-plus']" />-->
          <p class="font-bold text-lg">Add Account</p>
        </div>
      </div>

      <div class="flex flex-col">
        <AddAccountSteps />
        <div class="flex flex-row">
          <PersonalInfo v-show="step === 1" />
          <AccountInfo v-show="step === 2" />
          <Confirmation v-show="step === 3" />
        </div>

        <div
          class="flex bg-gray-200 px-3 absolute py-3 left-0 right-0 bottom-0 rounded-br-lg"
        >
          <div class="w-1/2 flex items-center justify-start">
            <button
              v-show="step !== 1"
              @click="previous()"
              class="text-xs mx-3 bg-gray-400 rounded hover:bg-gray-500 text-gray-600 hover:text-gray-700 font-black px-4 py-2 transition duration-100 ease-in"
            >
              <i class="fa fa-arrow-left"></i>
              Back
            </button>
          </div>
          <div class="w-1/2 flex items-center justify-end px-3">
            <button
              v-show="step !== 3"
              @click="next()"
              class="text-xs bg-blue-500 rounded hover:bg-green-600 text-white font-black px-4 py-2 transition duration-200 ease-in"
            >
              Next
              <i class="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Accounts from "@/store/Accounts";

@Component
export default class UserAccounts extends Vue {
  get step() {
    return Accounts.getCurrentStep;
  }

  next() {
    if (this.step === 2) {
      Accounts.CHANGE_TRANSITION_NAME("firstslide");
    }
    Accounts.nextStep();
  }

  previous() {
    if (this.step === 2) {
      Accounts.CHANGE_TRANSITION_NAME("slide");
    }
    Accounts.previousStep();
  }
}
</script>
