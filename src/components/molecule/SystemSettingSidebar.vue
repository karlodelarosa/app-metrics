<template>
  <div class="bg-gray-300 rounded-l-lg p-5 opacity-75 blur h-full">
    <h2 class="text-2xl font-bold text-gray-800 mb-12">
      <font-awesome-icon
        :icon="['fas', 'cogs']"
        class="text-sm text-gray-600"
      />
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
        <font-awesome-icon :icon="['fas', 'wrench']" />
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
        <font-awesome-icon :icon="['fas', 'chart-line']" />
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
        <font-awesome-icon :icon="['fas', 'universal-access']" />
        Accounts
      </label>
    </button>
    <button
      @click="clickMenu('team')"
      class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out"
    >
      <label class="text-sm font-bold">
        <font-awesome-icon :icon="['fas', 'users']" />
        Teams
      </label>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemSettings from "@/store/SystemSettings";
import Template from "@/store/Template";

@Component
export default class SystemSettingSidebar extends Vue {
  get isOnSystemSettingBackground() {
    return Template.isOn["system-setting-background"];
  }
  clickMenu(item: string) {
    SystemSettings.SET_ACTIVE_SIDEBAR_ITEM(item);
  }
}
</script>
