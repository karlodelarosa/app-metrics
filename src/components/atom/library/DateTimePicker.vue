<template>
  <date-picker v-model="time" type="datetime"></date-picker>
</template>

<script lang="ts">
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      time: null
    };
  }
};
</script>

<style scoped></style>
