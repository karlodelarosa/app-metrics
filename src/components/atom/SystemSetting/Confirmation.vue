<template>
  <transition name="slide">
    <div class="flex flex-col w-full mb-20">
      <div class="flex flex-col justify-center items-center mb-8">
        <font-awesome-icon :icon="['fas', 'check-circle']" size="2x" class="text-green-500" />
        <p class="text-black font-black text-xs uppercase pt-3">
          Confirm account registration
        </p>
      </div>

      <div class="text-gray-700 text-center mb-6 bg-gray-200 py-3 rounded">
        <p
          class="text-lg font-mono text-blue-500 cursor-pointer hover:underline hover:text-blue-700"
        >
          karlo@gmail.com
        </p>
        <p class="text-xs font-bold uppercase">
          Karlo Dela Rosa
          <span class="text-xs font-bold uppercase text-gray-500"
            >(Member)</span
          >
        </p>
      </div>

      <div class="text-gray-700 text-center px-4 py-2">
        <p class="text-gray-700 text-xs italic">
          Create this account?
        </p>
        <button class="rounded px-4 h-10 text-sm text-white bg-green-500 font-bold">
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
