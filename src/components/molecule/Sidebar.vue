<template>
  <div class="bg-white fixed mt-16 h-full max-h-screen min-h-screen shadow-md w-inherit">
    <div class="xl:py-2">
      <div class="hidden xl:block uppercase font-bold text-grey-darker text-xs px-4 py-2">MENU</div>
      <div class="group sidebar-item with-children">
        <a
          @click="goToComponent('dashboard')"
          class="block xl:flex xl:items-center text-center xl:text-left shadow-light xl:shadow-none py-6 xl:py-2 xl:px-4 border-l-4 border-transparent hover:bg-gray-200 cursor-pointer"
          :class="{ 'bg-gray-200': isActiveSupComponent }"
        >
          <i class="fa fa-crosshairs"></i>
          <div class="text-xs pl-3">
            SUP Dashboard
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class Sidebar extends Vue {
  get isActiveSupComponent() {
    return Template.isActiveSupComponent;
  }

  goToComponent(payload: string) {
    Template.pageContentRequest(payload);
  }
}
</script>
