<template>
  <div>
    <h1>Hello world</h1>
    <svg width="300" height="100" ref="barchart"></svg>
  </div>
</template>
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
