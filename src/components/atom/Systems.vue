<template>
  <div>
    <div class="flex flex-wrap items-center justify-center">
      <div v-for="(data, key) in sampleData" :key="key">
        <radial-progress-bar
          class="m-3"
          :animate-speed="animateSpeed"
          :stroke-width="15"
          :start-color="startColor"
          :stop-color="stopColor"
          :diameter="diameter"
          :inner-stroke-color="innerStrokeColor"
          :completed-steps="data.percentage"
          :total-steps="totalSteps"
        >
          <p>{{ data.percentage }}%</p>
          <p>{{ data.systemName }}</p>
        </radial-progress-bar>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <button
        @click="refreshValues()"
        class="bg-blue-500 rounded text-white p-5 outline-none"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import RadialProgressBar from "vue-radial-progress";

export default {
  data() {
    return {
      diameter: 150,
      animateSpeed: 500,
      completedSteps: 80,
      totalSteps: 100,
      startColor: "#48bb78",
      stopColor: "#48bb78",
      strokeWidth: 20,
      innerStrokeColor: "#edf2f7",
      sampleData: [
        { systemName: "System1", percentage: Math.floor(Math.random() * 101) },
        { systemName: "System2", percentage: Math.floor(Math.random() * 101) },
        {
          systemName: "System3",
          percentage: Math.floor(Math.random() * 101)
        },
        { systemName: "System4", percentage: Math.floor(Math.random() * 101) },
        {
          systemName: "System4",
          percentage: Math.floor(Math.random() * 101)
        },
        {
          systemName: "System4",
          percentage: Math.floor(Math.random() * 101)
        },
        { systemName: "System4", percentage: Math.floor(Math.random() * 101) },
        { systemName: "System4", percentage: Math.floor(Math.random() * 101) },
        { systemName: "System4", percentage: Math.floor(Math.random() * 101) }
      ]
    };
  },

  methods: {
    refreshValues: function() {
      this.$data.sampleData = [
        { systemName: "Deborah", percentage: Math.floor(Math.random() * 101) },
        { systemName: "Kraken", percentage: Math.floor(Math.random() * 101) },
        {
          systemName: "Lesson Room",
          percentage: Math.floor(Math.random() * 101)
        },
        { systemName: "NBRIS", percentage: Math.floor(Math.random() * 101) },
        {
          systemName: "Logs Service",
          percentage: Math.floor(Math.random() * 101)
        },
        {
          systemName: "Tutor Inbox",
          percentage: Math.floor(Math.random() * 101)
        },
        { systemName: "CPAT", percentage: Math.floor(Math.random() * 101) },
        { systemName: "GOLA", percentage: Math.floor(Math.random() * 101) },
        { systemName: "GOLA", percentage: Math.floor(Math.random() * 101) }
      ];
    }
  },

  components: {
    RadialProgressBar
  }
};
</script>

<style scoped></style>
