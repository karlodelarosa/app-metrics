<template>
  <div>
    <div class="flex steps">
      <div class="w-1/3 text-center px-6">
        <div
          :class="{ active: step === 1 }"
          class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200"
        >
          <div
            class="w-1/3 bg-transparent h-24 flex items-center justify-center icon-step rounded-l-lg"
          >
            <font-awesome-icon :icon="['fas', 'user-tie']" size="lg" />
          </div>
          <div
            class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step"
          >
            <h2 class="font-bold text-sm">Personal Info</h2>
            <p class="text-xs">
              Nothing personal, just your personal information
            </p>
          </div>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <div class="rounded-full text-lg text-gray-500">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
      </div>
      <div class="w-1/3 text-center px-6">
        <div
          :class="{ active: step === 2 }"
          class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200"
        >
          <div
            class="w-1/3 bg-transparent h-24 flex items-center justify-center icon-step rounded-l-lg"
          >
            <font-awesome-icon :icon="['fas', 'user-astronaut']" size="lg" />
          </div>
          <div
            class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step"
          >
            <h2 class="font-bold text-sm">Account Info</h2>
            <p class="text-xs">
              Anything you want for your credentials
            </p>
          </div>
        </div>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <div class="rounded-full text-lg text-gray-500">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </div>
      </div>
      <div class="w-1/3 text-center px-6">
        <div
          :class="{ active: step === 3 }"
          class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200"
        >
          <div
            class="w-1/3 bg-transparent h-24 flex items-center justify-center icon-step rounded-l-lg"
          >
            <font-awesome-icon :icon="['fas', 'check']" size="lg" />
          </div>
          <div
            class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step"
          >
            <h2 class="font-bold text-sm">Confirmation</h2>
            <p class="text-xs">
              Finish it!
            </p>
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
export default class AddAccountSteps extends Vue {
  get step() {
    return Accounts.getCurrentStep;
  }
}
</script>
