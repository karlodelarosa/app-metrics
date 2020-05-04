<template>
  <div class="bg-gray-300 rounded-l-lg p-5 opacity-75 blur h-full">
    <h2 class="text-2xl font-bold text-gray-800 mb-12">
      <i class="fa fa-cogs text-sm text-gray-600"></i>
      Settings
    </h2>

    <p
      class="font-black text-gray-600 font-sans text-xs border-b-2 border-gray-400 pb-3 mt-6 mb-2 w-full"
    >
      GENERAL
    </p>
    <button
      @click="clickMenu('system')"
      class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out"
    >
      <label class="text-sm font-bold">
        <i class="fa fa-wrench"></i>
        System
      </label>
    </button>

    <p
      class="font-black text-gray-600 font-sans text-xs border-b-2 border-gray-400 pb-3 mt-6 mb-2 w-full"
    >
      METRICS
    </p>
    <button
      @click="clickMenu('sup')"
      class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out"
    >
      <label class="text-sm font-bold">
        <i class="fa fa-chart-line"></i>
        SUP
      </label>
    </button>

    <p
      class="font-black text-gray-600 font-sans text-xs border-b-2 border-gray-400 pb-3 mt-6 mb-2 w-full"
    >
      PEOPLE
    </p>

    <button
      @click="clickMenu('accounts')"
      class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out"
    >
      <label class="text-sm font-bold">
        <i class="fa fa-universal-access"></i>
        Accounts
      </label>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemSettings from "@/store/SystemSettings";

@Component
export default class SystemSettingSidebar extends Vue {
  clickMenu(item: string) {
    SystemSettings.SET_ACTIVE_SIDEBAR_ITEM(item);
  }
}
</script>
