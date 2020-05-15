<template>
  <transition name="slide">
    <div class="flex flex-col w-full px-12 p-5 mt-6" style="min-height: 400px">
      <div class="flex justify-center items-center bg-indigo-500 h-6">
        <p class="text-white font-black text-xs uppercase">
          Confirm information
        </p>
      </div>

      <div class="text-gray-700 text-center px-4 py-2 my-12">
        <p
          class="text-xl font-mono text-blue-500 cursor-pointer hover:underline hover:text-blue-700"
        >
          karlodelarosa@gmail.com
        </p>
        <p class="text-sm font-bold uppercase">
          Karlo Dela Rosa
          <span class="text-sm font-bold uppercase text-gray-500"
            >(Member)</span
          >
        </p>
      </div>

      <div class="text-gray-700 text-center px-4 py-2">
        <p class="text-gray-700 text-xs italic">
          Create this account?
        </p>
        <button class="w-1/3 rounded-lg h-12 text-white bg-green-500 font-bold">
          Yes, create this account
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PersonalInformation from "@/store/Domain/Accounts/PersonalInformation";

@Component
export default class AccountConfirmation extends Vue {
 get firstName() {
   return PersonalInformation.getFirstName;
 }
}
</script>
