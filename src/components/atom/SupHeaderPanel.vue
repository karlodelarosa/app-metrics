<template>
  <div
    class="lg:flex lg:items-center lg:justify-between bg-white mb-3 p-5 rounded-lg shadow"
  >
    <div class="flex-1 min-w-0">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
      >
        System Uptime Percentage
      </h2>
      <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
        <div
          class="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6"
        >
          <font-awesome-icon
            :icon="['fas', 'clock']"
            class="mr-1 text-gray-400"
          />
          Updated 3 hours ago
        </div>
        <div
          class="mt-2 flex items-center text-sm leading-5 text-gray-600 sm:mr-6"
        >
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="mr-1 text-gray-400"
          />
          Karlo
        </div>
      </div>
    </div>
    <div class="mt-5 flex lg:mt-0 lg:ml-4">
      <span class="hidden sm:block shadow-sm rounded-md">
        <button
          @click="goToComponent('sup-admin-panel')"
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
        >
          <font-awesome-icon
            :icon="['fas', 'user-secret']"
            class="mr-1 text-gray-500"
          />
          Admin Panel
        </button>
      </span>
      <span class="hidden sm:block ml-3 shadow-sm rounded-md">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
        >
          <font-awesome-icon
            :icon="['fas', 'chart-line']"
            class="mr-1 text-gray-500"
          />
          Timeline
        </button>
      </span>

      <span class="sm:ml-3 shadow-sm rounded-md">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <font-awesome-icon :icon="['fas', 'sync']" class="mr-1" />
          Refresh
        </button>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class SupHeaderPanel extends Vue {
  goToComponent(payload: string) {
    Template.pageContentRequest(payload);
  }
}
</script>
