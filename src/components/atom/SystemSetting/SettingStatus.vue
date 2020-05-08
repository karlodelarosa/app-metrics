<template>
  <div>
    <div
      :class="{ 'black-opacity-50': isOnSystemSettingBackground }"
      class="flex flex-row justify-between w-full mt-5 rounded-lg p-5  blur"
    >
      <div class="flex flex-row">
        <div class="mr-4 flex flex-col">
          <font-awesome-icon :icon="['fas', 'cloud-moon']" class="text-white" />
        </div>
        <div>
          <label class="text-xs font-black text-gray-500"
            >CURRENT SETTING</label
          >
          <h1 class="font-black text-4xl text-white">1H 2020</h1>
          <label
            class="font-black text-xs bg-green-500 rounded-full px-4 text-white"
            >INTERIM</label
          >
        </div>
      </div>

      <div>
        <button @click="toggleBackground()" class="text-white hover:opacity-75">
          <font-awesome-icon :icon="['fas', 'image']" class="icon alt" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class SettingStatus extends Vue {
  get isOnSystemSettingBackground() {
    return Template.isOn["system-setting-background"];
  }
  toggleBackground() {
    Template.SET_SYSTEM_SETTING_BACKGROUND_IMAGE_STATUS();
  }
}
</script>
