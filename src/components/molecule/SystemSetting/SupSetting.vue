<template>
  <div class="flex">
    <div class="p-5 w-1/3">
      <input
        placeholder="System name"
        v-show="!isAddingSystem"
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-full-name"
        type="text"
      />
      <button
        class="bg-green-500 px-4 py-2 rounded-lg font-black text-sm text-white my-3 hover:bg-green-700"
      >
        <i class="fa fa-plus-circle"></i>
        Add system
      </button>
    </div>
    <div class="w-2/3 p-5">
      <div
        id="tblSystems"
        class="bg-white shadow overflow-hidden sm:rounded-lg border border-gray-200"
      >
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Systems
          </h3>
          <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            List of systems
          </p>
        </div>
        <div v-for="i in 5" :key="i">
          <dl
            class="hover:bg-gray-100 cursor-pointer transition duration-200 ease-in-out"
          >
            <div
              class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6"
            >
              <!--              <dt class="text-sm leading-5 font-medium text-gray-500">-->
              <!--                <button class="bg-transparent py-1 px-3 text-indigo-500 hover:bg-indigo-500 hover:text-white rounded-full transition duration-100 ease-in"><i class="fa fa-edit"></i> Edit</button>-->
              <!--              </dt>-->
              <dd
                class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-3 cursor-auto"
              >
                <div class="flex items-center">
                  <div class="w-1/6 px-4 font-black">
                    Deborah
                  </div>
                  <div class="w-4/6 px-4">
                    <input
                      type="text"
                      class="w-1/6 rounded-lg border border-gray-300 outline-none p-2 w-full"
                      value="Deborah"
                    />
                  </div>
                  <div class="w-1/6 px-4">
                    <button
                      class="rounded-lg bg-green-500 text-white px-2 py-1 hover:bg-green-600 transition duration-100 ease-in focus:outline-none"
                    >
                      <i class="fa fa-check"></i>
                    </button>
                  </div>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SupSetting extends Vue {
  get isAddingSystem() {
    return this.$data.addingSystem;
  }

  data() {
    return {
      addingSystem: false
    };
  }
}
</script>
