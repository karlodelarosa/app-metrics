<template>
  <div class="h-full">
    <h4 class="font-bold leading-7 text-gray-900 mb-2">
      Department SUP
    </h4>
    <div
      @click="clickGauge()"
      class="column-wrapper rounded bg-gray-200 cursor-pointer"
    >
      <div class="column bg-indigo-500 rounded" style="height: 80%"></div>
      <div
        :class="{ 'column-wave': isClickedGauge }"
        class="bg-gray-200 rounded "
      ></div>
    </div>
    <h2
      class="text-3xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate mt-2"
    >
      60%
    </h2>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DepartmentSup extends Vue {
  get isClickedGauge() {
    return this.$data.isClicked;
  }

  clickGauge() {
    this.$data.isClicked = true;
    setTimeout(() => {
      this.$data.isClicked = false;
    }, 3000);
  }

  data() {
    return {
      isClicked: false
    };
  }
}
</script>
