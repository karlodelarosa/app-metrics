<template>
  <div>
    <transition name="scale">
      <div v-if="!isSupAdminPage">
        <SupHeaderPanel />
        <div class="flex mb-4 bg-white rounded-lg shadow">
          <div class="w-1/6 p-5 text-center">
            <DepartmentSup />
          </div>
          <div class="w-5/6 p-5">
            <h4 class="font-bold leading-7 text-gray-900 mb-2">Systems</h4>
            <Systems />
          </div>
        </div>
      </div>
    </transition>

    <transition name="scale">
      <div v-if="isSupAdminPage">
        <SupAdminPanel />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class Sup extends Vue {
  get supDashboard() {
    return Template.supDashboard;
  }

  get isSupAdminPage() {
    return Template.supAdminPage;
  }
}
</script>
