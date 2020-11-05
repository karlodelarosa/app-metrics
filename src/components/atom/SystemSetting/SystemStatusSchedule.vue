<template>
  <div>
    <div class="w-full mt-5 rounded-lg px-5 py-2 night-sky-gradient text-white shadow-lg">
      <div class="flex flex-col items-center text-center py-2">
        <font-awesome-icon
          :icon="['far', 'calendar-times']"
          size="2x"
        />
        <label class="uppercase text-xs font-black pt-2"
          >No Setting Schedule</label
        >
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
