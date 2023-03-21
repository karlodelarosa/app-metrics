<template>
  <div class="antialiased flex bg-gray-200 min-h-screen">
    <Header />
    <div class="w-1/6">
      <Sidebar />
    </div>
    <div class="mt-16 p-5 w-5/6">
      <Sup />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Dashboard extends Vue {
  computed() {
    this.$data.currentRoute = this.$router;
  }

  data() {
    return {
      currentRoute: this.$route.path
    };
  }
}
</script>
