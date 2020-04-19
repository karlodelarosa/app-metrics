<template>
<!-- Remove this if not used -->
  <div class="bg-gray-200 relative">
    <div class="flex pt-16" v-if="isActiveDashboardPages">
      <Sidebar />
      <Targets />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class MainContent extends Vue {
  get isActiveDashboardPages() {
    return Template.isActiveDashboardPages;
  }
}
</script>
