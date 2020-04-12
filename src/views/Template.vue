<template>
  <div class="antialiased h-screen bg-gray-200">
    <Header />
    <MainContent />

    <div class="pt-16" v-show="noActivePage">
      <div class="mt-5 text-center">
        LANDING PAGE
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class PageTemplate extends Vue {
  get noActivePage() {
    return Template.getActivePage === "";
  }

  mounted() {
    const currentPage = localStorage.getItem("activePage");
    if (currentPage !== null) {
      Template.pageContentRequest(currentPage);
    }
  }
}
</script>
