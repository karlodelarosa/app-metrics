<template>
  <div
    class="w-full flex items-center justify-center flex-col py-12 border border-gray-400 shadow-lg rounded purplelove-gradient-animated text-white"
  >
    <font-awesome-icon :icon="['fas', 'tools']" size="4x" />

    <h1 class="font-bold text-3xl mt-6 mb-3">Under Construction</h1>
    <p>Oops! Someone is still working on this page. Comeback again later!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class UnderConstruction extends Vue {}
</script>
