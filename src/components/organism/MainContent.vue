<template>
  <div class="bg-gray-200 relative">
    <div class="flex pt-16" v-show="isDashboard">
      <Sidebar />
      <Targets />
    </div>

<!--    <MyAccount v-show="isMyAccount" />-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class MainContent extends Vue {
  get isDashboard() { return Template.isDashboard }
  get isMyAccount() { return Template.getActivePage === "myAccount"; }

}
</script>
