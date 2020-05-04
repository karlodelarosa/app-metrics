<template>
  <transition name="fade">
    <div
      v-show="isOpenConfirmationModal"
      class="fixed bottom-0 inset-x-0 px-4 sm:inset-0 sm:flex sm:items-center sm:justify-center z-50"
    >
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-black opacity-25"></div>
            </div>
      <div
        class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
      >
        <p class="text-center mt-6 font-black mb-12 text-xl">
          Edit Account Information
        </p>
        <div class="px-8 flex flex-col mb-8">
          <div class="flex flex-col my-2">
            <div
              class="flex flex-row justify-between h-12 bg-gray-200 px-2 items-center justify-center"
            >
              <p class="w-3/6 font-black text-sm uppercase">Status</p>
              <div class="w-3/6 flex flex-row justify-end pt-4">
                <label class="font-bold mr-2">Active</label>
                <div
                  class="relative rounded-full w-12 h-6 transition duration-200 ease-linear cursor-pointer mb-4"
                  :class="[toggle === '1' ? 'bg-green-400' : 'bg-gray-400']"
                  @click="toggle === '0' ? (toggle = '1') : (toggle = '0')"
                >
                  <label
                    for="toggle"
                    class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-200 ease-linear cursor-pointer"
                    :class="[
                      toggle === '1'
                        ? 'translate-x-full border-green-400'
                        : 'translate-x-0 border-gray-400'
                    ]"
                  ></label>
                  <input
                    type="checkbox"
                    id="toggle"
                    name="toggle"
                    class="appearance-none w-full h-full hidden active:outline-none focus:outline-none"
                    @click="toggle === '0' ? (toggle = '1') : (toggle = '0')"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col h-auto my-2 mt-6">
            <label class="font-black text-sm uppercase">Role</label>
            <select
              class="h-10 border border-gray-300 rounded-lg bg-gray-100 px-2"
            >
              <option value="">Member</option>
              <option value="">1</option>
              <option value="">1</option>
            </select>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-orange-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-orange-400 focus:outline-none focus:border-orange-700 focus:shadow-outline-red transition ease-in-out duration-100 sm:text-sm sm:leading-5"
            >
              Update Info
            </button>
          </span>
          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              @click="closeConfirmationModal()"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Cancel
            </button>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class EditManageAccountsModal extends Vue {
  get isOpenConfirmationModal() {
    return Template.isOpenConfirmationModal;
  }

  closeConfirmationModal() {
    Template.SET_CONFIRMATION_MODAL(false);
  }

  data() {
    return {
      toggle: 1
    };
  }
}
</script>
