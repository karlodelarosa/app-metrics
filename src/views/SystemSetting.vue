<template>
  <!--  <div class="antialiased flex bg-gray-100 min-h-screen bg-cover bg-center" style="background-image: url('https://wallpaperaccess.com/full/1245781.jpg')">-->
  <div
    class="antialiased flex bg-gray-200 min-h-screen bg-no-repeat bg-fixed bg-cover bg-center"
    style="background-image: url('https://i.redd.it/yn9ryipxeac31.png')"
  >
    <Header />
    <SystemSettingModal/>
    <div class="mt-16 p-2 container mx-auto">
      <div class="bg-white w-full mt-5 rounded-lg shadow-lg p-5 black-opacity-50 blur">
        <label class="text-xs font-black text-gray-500">CURRENT SETTING</label>
        <h1 class="font-black text-4xl text-white">1H 2020</h1>
        <label class="font-black text-xs bg-green-500 rounded-full px-4 text-white">INTERIM</label>
      </div>
      <div class="rounded-lg shadow-lg mt-6 mb-3 h-auto">
        <div class="flex mb-4">
          <div class="w-1/4">
            <SystemSettingSidebar />
          </div>
          <div class="w-3/4 bg-white rounded-r-lg relative">
            <h2 class="text-2xl font-bold text-gray-700 border-b bg-gray-200 px-5 py-6 rounded-tr-lg">
              {{ activeItemLabel }}
            </h2>
            <div class="overflow-y-scroll">
              <transition name="fade" mode="out-in">
                <SystemForm v-if="activeItem === 'system'" />
                <SupSetting v-if="activeItem === 'sup'" />
                <UserAccounts v-if="activeItem === 'add_accounts'" />
                <ManageAccounts v-if="activeItem === 'accounts'" />
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SystemSettings from "@/store/SystemSettings";
import { Strings } from "@/store/utilities/Strings";

@Component
export default class SystemSetting extends Vue {
  get activeItemLabel() {
    return Strings.capitalizeFirstLetter(SystemSettings.getActiveSidebarItem);
  }
  get activeItem() {
    return SystemSettings.getActiveSidebarItem;
  }
}
</script>
