<template>
  <div class="p-5" style="height: 600px">
    <div class="description mb-6 border-l-4 border-blue-500 p-5 shadow">
      <h1 class="font-bold text-2xl leading-7 text-gray-700">System Uptime Percentage <span class="text-sm text-gray-500">(High Availability)</span></h1>
      <p class="text-gray-600">A characteristic of a system which aims to ensure an agreed level of operational performance, usually uptime, for a higher than normal period.</p>
    </div>
    <SupTabMenu/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SupSetting extends Vue {
  setItemNumber(itemNumber: number) {
    this.$data.items = itemNumber;
  }

  data() {
    return {
      addingSystem: false,
      items: 1
    };
  }
}
</script>
