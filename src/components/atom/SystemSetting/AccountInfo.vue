<template>
  <transition :name="transitionName">
    <form class="w-full px-12 pt-4 mt-6 p-5 min-w-full" style="min-height: 400px">
      <div class="flex justify-center items-center bg-indigo-500 h-6 mb-5">
        <p class="text-white font-black text-xs uppercase">Account info</p>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="email"
            placeholder="Karlo"
          />
          <!--          <p class="text-red-500 text-xs italic">-->
          <!--            Please fill out this field.-->
          <!--          </p>-->
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Account Type
          </label>
          <select
            class="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Member</option>
            <option>Admin</option>
            <option>Texas</option>
          </select>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Password
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p class="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
    </form>
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
}
</script>
