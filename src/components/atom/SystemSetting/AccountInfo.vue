<template>
  <transition :name="transitionName">
    <div class="w-full px-12 pt-4 mt-6 p-5 min-w-full">
      <div v-show="doneProcessing">
        <Confirmation />
      </div>

      <div v-show="accountInfoSubmitted && !doneProcessing">
        <div class="flex flex-row justify-center items-center mb-16">
          <div class="w-2/6 flex justify-center items-center">
            <LoadingFillingUp />
          </div>
          <div class="w-4/6">
            <p class="text-gray-700 font-black text-xs uppercase pt-3 mb-2">
              Please wait while we process your Account Information.
            </p>
            <p class="text-gray-500 text-xs italic">
              <font-awesome-icon :icon="['fas', 'quote-left']" size="xs" />
              Admit it. You're waiting for something you know won't happen.
            </p>
          </div>
        </div>
      </div>

      <div v-show="!accountInfoSubmitted">
        <div class="flex justify-center items-center h-6 mb-12 flex-col">
          <font-awesome-icon :icon="['fas', 'user-astronaut']" size="lg" />
          <p class="text-black font-black text-xs uppercase pt-3">
            Account info
          </p>
        </div>
        <div class="flex flex-col justify-center items-center mb-6">
          <div class="w-full md:w-full mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <input
              v-model="email"
              :class="{
                'border-red-500 bg-red-100 error-input-again': hasErrorEmailFormat
              }"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              ref="emailInput"
              type="email"
              placeholder="sample@email.com"
            />
            <!--          <p v-show="hasErrorEmail" class="text-red-500 text-xs italic">-->
            <!--            Please fill out this field.-->
            <!--          </p>-->
            <p
              id="emailErrorMessage"
              v-show="hasErrorEmailFormat"
              class="text-red-500 text-xs italic"
            >
              Wrong!
            </p>
          </div>
          <div class="w-full md:w-full mt-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Account Type
            </label>
            <select
              v-model="accountType"
              @focusout="removeError()"
              :class="{
                'border-red-500 bg-red-100 error-input-again': hasErrorAccountType
              }"
              class="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ref="accountType"
            >
              <option value="1">Admin</option>
              <option value="2">Member</option>
              <option value="3">Guest</option>
            </select>
            <p v-show="hasErrorAccountType" class="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>

        <div class="mb-16 mt-8 flex justify-end">
          <button
            @click="submitAccountInfo()"
            class="text-xs bg-green-500 rounded hover:bg-green-600 text-white font-black px-4 py-2 transition duration-150 ease-in"
          >
            Submit
            <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Accounts from "@/store/Accounts";

@Component
export default class AccountInfo extends Vue {
  get transitionName() {
    return Accounts.getTransitionName;
  }

  get hasErrorAccountType() {
    return this.$data.hasError.accountType === true;
  }

  get hasErrorEmailFormat() {
    return this.$data.hasError.email === true;
  }

  $refs!: {
    emailInput: HTMLInputElement;
    accountType: HTMLInputElement;
  };

  removeError() {
    return (this.$data.hasError.accountType = false);
  }

  submitAccountInfo() {
    this.checkInputs();
    if (!this.$data.hasError.email && !this.$data.hasError.accountType) {
      this.$data.accountInfoSubmitted = true;
      setTimeout(() => {
        this.$data.doneProcessing = true;
      }, 6000);
    }
  }

  checkInputs() {
    this.resetForm();
    if (!this.validateEmail()) {
      this.$data.hasError.email = true;
    }

    if (this.$data.accountType === "") {
      this.$data.hasError.accountType = true;
    }

    if (!this.$data.hasError.email) {
      setTimeout(() => {
        this.$refs.emailInput.classList.remove("error-input-again");
      }, 400);
      this.$refs.emailInput.classList.add("error-input-again");
    }

    if (!this.$data.hasError.accountType) {
      setTimeout(() => {
        this.$refs.accountType.classList.remove("error-input-again");
      }, 400);
      this.$refs.accountType.classList.add("error-input-again");
    }
  }

  resetForm() {
    this.$data.hasError.email = false;
    this.$data.hasError.accountType = false;
  }

  validateEmail() {
    const pattern = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(this.$data.email).toLowerCase());
  }

  next() {
    Accounts.nextStep();
  }

  data() {
    return {
      email: "",
      accountType: "",
      hasError: {
        email: false,
        accountType: false
      },
      emailFormatError: false,
      accountInfoSubmitted: false,
      doneProcessing: false
    };
  }
}
</script>
