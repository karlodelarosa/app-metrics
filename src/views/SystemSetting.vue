<template>
  <!--  <div class="antialiased flex bg-gray-100 min-h-screen bg-cover bg-center" style="background-image: url('https://wallpaperaccess.com/full/1245781.jpg')">-->
  <div
    :class="{ 'system-setting-background-img': isOnSystemSettingBackground }"
    class="antialiased flex bg-gray-400 min-h-screen bg-no-repeat bg-fixed bg-cover bg-center"
  >
    <Header />
    <SystemSettingModal />
    <div class="mt-16 p-2 w-5/6 mx-auto">
      <div class="rounded-lg shadow-lg mt-6 mb-3 h-auto">
        <div class="flex mb-4">
          <div class="w-1/4">
            <SystemSettingSidebar />
          </div>
          <div class="w-3/4 bg-white rounded-r-lg relative">
            <h2
              class="text-2xl font-bold text-gray-700 border-b bg-gray-200 px-5 py-6 rounded-tr-lg"
            >
              {{ activeItemLabel }}
            </h2>
            <div class="overflow-y-scroll">
              <transition name="fade" mode="out-in">
                <SystemForm v-if="activeItem === 'system'" />
                <SupSetting v-if="activeItem === 'sup'" />
                <UserAccounts v-if="activeItem === 'add_accounts'" />
                <ManageAccounts v-if="activeItem === 'accounts'" />
                <TeamSettings v-if="activeItem === 'team'" />
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
import Template from "@/store/Template";

@Component
export default class SystemSetting extends Vue {
  get activeItemLabel() {
    return Strings.capitalizeFirstLetter(SystemSettings.getActiveSidebarItem);
  }
  get activeItem() {
    return SystemSettings.getActiveSidebarItem;
  }

  get isOnSystemSettingBackground() {
    return Template.isOn["system-setting-background"];
  }
}
</script>
