<template>
  <div>
    <div class="tab-menu">
      <div class="flex">
        <button
          @click="setItemNumber(2)"
          class="w-1/3 text-gray-500 border-t-4 border-transparent hover:text-white hover:bg-gray-500 h-12 text-xs uppercase font-bold transition duration-150"
          :class="{
            'border-black text-gray-800 hover:bg-white pointer-events-none':
              items === 2,
            'bg-gray-300': items !== 2
          }"
        >
          <font-awesome-icon :icon="['fas', 'list']" class="mr-2" />
          All Systems
        </button>
        <button
          @click="setItemNumber(3)"
          class="w-1/3 text-gray-500 border-t-4 border-transparent hover:text-white hover:bg-gray-500 h-12 text-xs uppercase font-bold transition duration-150"
          :class="{
            'border-black text-gray-800 hover:bg-white pointer-events-none':
              items === 3,
            'bg-gray-300': items !== 3
          }"
        >
          <font-awesome-icon :icon="['fas', 'trash']" class="mr-2" />
          Removed
        </button>
        <button
          @click="setItemNumber(4)"
          class="w-1/3 text-gray-500 border-t-4 border-transparent hover:text-white hover:bg-gray-500 h-12 text-xs uppercase font-bold transition duration-150"
          :class="{
            'border-black text-gray-800 hover:bg-white pointer-events-none':
              items === 4,
            'bg-gray-300': items !== 4
          }"
        >
          <font-awesome-icon :icon="['far', 'clock']" class="mr-2" />
          Activity Log
        </button>
      </div>
      <div class="tab-content h-screen p-8">
        <div v-show="items === 1" class="w-full bg-white h-24">
          <AddSystem />
        </div>
        <div v-show="items === 2" class="w-full bg-white h-24">
          <AllSystem />
        </div>
        <div v-show="items === 3" class="w-full bg-white h-24">
          <RemovedSystem />
        </div>
        <div v-show="items === 4" class="w-full bg-white h-24">
          <SupActivityLog />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SupTabMenu extends Vue {
  setItemNumber(itemNumber: number) {
    this.$data.items = itemNumber;
  }

  data() {
    return {
      addingSystem: false,
      items: 2
    };
  }
}
</script>
