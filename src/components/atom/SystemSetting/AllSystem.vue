<template>
  <div class="mb-64">
    <div class="flex flex-col">
      <div class="">
        <button
          @click="addNewSystem()"
          class="w-auto h-8 px-2 bg-green-500 rounded text-white mb-2 mr-2 text-xs uppercase font-black hover:bg-green-400"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
          Add System
        </button>
      </div>
      <table class="border border-gray-300 rounded-lg overflow-hidden">
        <thead class="bg-indigo-500 text-white">
          <th class="w-2/4 h-12 text-sm">System</th>
          <th class="w-1/4 h-12 text-sm">Resources</th>
          <th class="w-1/4 h-12 text-sm">Action</th>
        </thead>
        <tbody>
          <tr
            v-for="(value, key) in mockData"
            :key="key"
            class="hover:bg-gray-200 cursor-pointer"
          >
            <td class="px-4 py-4 border-b border-gray-400">
              <h1 class="font-bold text-xl">{{ value.name }}</h1>
              <p class="text-xs text-gray-600">Project Name</p>
            </td>
            <td class="px-4 py-4 border-b text-center border-gray-400">
              <font-awesome-icon :icon="['fab', 'gitlab']" class="mr-2" />
              <font-awesome-icon :icon="['fab', 'aws']" />
            </td>
            <td
              class="px-4 py-4 border-b text-center border-gray-400 border-r"
              style="border-right-color: transparent"
            >
              <div v-if="!confirmDelete || itemId !== value.id">
                <button
                  class="text-blue-700 text-xs hover:underline mr-2"
                >
                  <font-awesome-icon :icon="['fas', 'edit']" /> Edit
                </button>
                <button
                  @click="removeItem(value.id)"
                  class="text-gray-500 text-xs hover:underline"
                >
                  <font-awesome-icon :icon="['fas', 'trash-alt']" /> Delete
                </button>
              </div>
              <div v-else-if="confirmDelete && itemId === value.id">
                <button
                  @click="cancelRemove()"
                  class="bg-white rounded shadow w-6 h-6 text-red-500 hover:text-red-700 mr-2"
                >
                  <font-awesome-icon :icon="['fas', 'times']" />
                </button>
                <button
                  @click="confirmItemDelete(value.id)"
                  class="bg-white rounded shadow w-6 h-6 text-green-500 hover:text-green-700 mr-2"
                >
                  <font-awesome-icon :icon="['fas', 'check']" />
                </button>
              </div>
            </td>
          </tr>
          <transition name="shrink">
            <tr v-show="activeAddNewSystem" class="bg-gray-200 cursor-pointer">
              <td
                class="px-4 py-4 border-b text-center hover:bg-green-200 border-gray-400"
              >
                <input
                  ref="systemName"
                  class="w-full bg-transparent h-6 px-2"
                  type="text"
                />
              </td>
              <td
                class="px-4 py-4 border-b text-center hover:bg-green-200 border-gray-400"
              >
                <input class="w-full bg-transparent h-6 px-2" type="text" />
              </td>
              <td class="px-4 py-4 border-b text-center border-gray-400">
                <button
                  @click="addNewSystem()"
                  class="bg-white rounded shadow w-6 h-6 text-red-500 hover:text-red-700 mr-2"
                >
                  <font-awesome-icon :icon="['fas', 'times']" />
                </button>
                <button
                  @click="saveSystem()"
                  class="bg-white rounded shadow px-2 text-sm h-6 text-green-500 hover:text-green-700"
                >
                  <font-awesome-icon :icon="['fas', 'save']" /> Save
                </button>
              </td>
            </tr>
          </transition>
        </tbody>
      </table>
      <br class="clear-both">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AllSystem extends Vue {
  $refs!: {
    systemName: HTMLInputElement;
  };

  saveSystem() {
    this.$data.mockData.push({
      name: this.$refs.systemName.value
    });
    this.$nextTick(() => {
      this.$data.activeAddNewSystem = false;
      this.$refs.systemName.value = "";
    });
  }

  addNewSystem() {
    this.$data.activeAddNewSystem = !this.$data.activeAddNewSystem;
    this.$nextTick(() => {
      this.$refs.systemName.focus();
    });
  }

  removeItem(itemId:any) {
    this.$data.confirmDelete = true;
    this.$data.itemId = itemId;
  }

  cancelRemove() {
    this.$data.confirmDelete = false;
    this.$data.itemId = 0;
  }

  confirmItemDelete(itemId:any) {
    alert(itemId);
  }

  data() {
    return {
      activeAddNewSystem: false,
      confirmDelete: false,
      itemId: 0,
      mockData: [
        {
          name: "Deborah",
          id: 1
        },
        {
          name: "Medusa",
          id: 2
        }
      ]
    };
  }
}
</script>
