<template>
  <date-picker v-model="time3" range></date-picker>
</template>

<script lang="ts">
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      time3: null
    };
  }
};
</script>

<style scoped></style>
