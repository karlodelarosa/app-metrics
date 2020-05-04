<template>
  <nav class="bg-gray-800 fixed z-50">
    <div class="max-w-7xl mx-auto w-screen px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                class="inline-flex"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                class="hidden"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0">
            <img
              class="block lg:hidden h-8 w-auto"
              src="/img/logos/workflow-mark-on-dark.svg"
              alt=""
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="/img/logos/workflow-logo-on-dark.svg"
              alt=""
            />
          </div>
          <div class="sm:block sm:ml-6">
            <div class="flex">
              <router-link
                to="/dashboard"
                href="#"
                :class="{ 'bg-gray-900': dashboardIsActive }"
                class="px-3 py-2 rounded-md text-sm font-medium leading-5 hover:bg-gray-700 text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >Dashboard
              </router-link>
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >Team</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >Projects</a
              >
              <a
                href="#"
                class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                >Calendar</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <router-link
            to="/system-setting"
            :class="{ 'bg-gray-900': settingsIsActive }"
            class="mx-1 border-2 border-transparent text-gray-400 rounded-full h-8 w-8 flex items-center justify-center hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            <i class="fa fa-user-cog"></i>
          </router-link>

          <router-link
            to="/system-setting"
            :class="{ 'bg-gray-900': settingsIsActive }"
            class="border-2 border-transparent text-gray-400 rounded-full h-8 w-8 flex items-center justify-center hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          >
            <i class="fa fa-bell"></i>
          </router-link>

          <AccountOptions />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class Header extends Vue {
  get dashboardIsActive() {
    return this.currentPage.includes("dashboard");
  }

  get settingsIsActive() {
    return this.currentPage.includes("system-setting");
  }
  //
  get currentPage() {
    return this.$route.path;
  }

  goToPage(payload: string) {
    this.$router.push(payload);
    Template.pageContentRequest(payload);
  }
}
</script>
