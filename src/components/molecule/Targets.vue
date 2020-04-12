<template>
  <div class="w-full overflow-y-scroll w-5/6 p-5">
    <div
      class="lg:flex lg:items-center lg:justify-between bg-white mb-3 p-5 rounded"
    >
      <div class="flex-1 min-w-0">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
        >
          Target Dashboard
        </h2>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
          <div
            class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6"
          >
            <i class="fa fa-clock mr-1"></i>
            3hours ago
          </div>
          <div
            class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6"
          >
            <i class="fa fa-user mr-1"></i>
            Karlo
          </div>
        </div>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="hidden sm:block shadow-sm rounded-md">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
          >
            <i class="fa fa-pencil-alt mr-1 text-gray-500"></i>
            Update
          </button>
        </span>
        <span class="hidden sm:block ml-3 shadow-sm rounded-md">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
          >
            <i class="fa fa-chart-line mr-1 text-gray-500"></i>
            Timeline
          </button>
        </span>

        <span class="sm:ml-3 shadow-sm rounded-md">
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <i class="fa fa-sync mr-1"></i>
            Refresh
          </button>
        </span>
      </div>
    </div>

    <div
      class="lg:flex lg:items-center lg:justify-between bg-white mb-3 p-5 rounded "
    >
      <h1>Hello world</h1>
      <svg width="300" height="100" ref="barchart"></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Targets extends Vue {}
</script>

<script>
import * as d3 from "d3";

export default {
  name: "LineChart",
  mounted() {
    d3.select("h1").attr("class", "red-text");
    const data = [10, 20, 15, 30, 60];
    const barHeight = 20;
    const bar = d3
      .select(this.$refs.barchart)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "rect")
      .attr("width", function(d) {
        return d;
      })
      .attr("height", barHeight - 1)
      .attr("transform", function(d, i) {
        return "translate(0," + i * barHeight + ")";
      });
  }
};
</script>
<style scoped>
.rect {
  fill: blue;
}
.red-text {
  color: red;
}
</style>
