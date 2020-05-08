<template>
  <transition name="fade" mode="out-in">
    <div
      v-show="isVisibleAddAccountModal"
      class="flex items-center justify-center"
    >
      <div
        class="mt-8 bg-white overflow-hidden fixed mx-auto z-modal inset-x-0 w-2/3 rounded-lg"
      >
        <div class="flex justify-end">
          <button
            @click="closeAddAccountModal()"
            class="focus:outline-none px-1"
          >
            <font-awesome-icon
              :icon="['fas', 'times-circle']"
              class="cursor-pointer text-red-500 hover:text-red-400"
            />
          </button>
        </div>
        <UserAccounts />
      </div>
      <div class="fixed inset-0 transition-opacity">
        <div
          class="absolute inset-0 bg-black opacity-50 z-modal-backdrop"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Modals from "@/store/Modals";

@Component
export default class AddAccountFormModal extends Vue {
  get isVisibleAddAccountModal() {
    return Modals.getAddAccountModal;
  }

  closeAddAccountModal() {
    Modals.SET_ADD_ACCOUNT_MODAL_VISIBILITY(false);
  }

  data() {
    return {
      toggle: 1
    };
  }
}
</script>
