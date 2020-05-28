<template>
  <div class="p-5">
    <AddAccountFormModal />
    <div class="flex justify-start">
      <button
        @click="openAddAccountModal()"
        type="button"
        class="mb-4 bg-green-500 inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-white hover:bg-green-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
      >
        <svg
          class="-ml-1 mr-2 h-5 w-5 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
          />
        </svg>
        Add Account
      </button>
    </div>

    <hr class="mb-4" />

    <div v-for="x in 3" class="my-10" :key="x">
      <h1 class="font-bold text-lg mx-2 mb-1">Developers</h1>
      <div class="flex items-center flex-wrap border-l-4 border-blue-500 px-1">
        <div v-for="i in 8" class="w-1/3 h-16 p-1 my-1" :key="i">
          <div
            class="w-full h-full nelson-gradient rounded p-2 flex flex-row cursor-pointer shadow"
          >
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="flex flex-col">
              <h2 class="font-black text-lg text-white mx-2">
                Karlo Dela Rosa
              </h2>
              <label class="mx-2 -mt-2 text-sm">Project Team 1</label>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-10">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Modals from "@/store/Modals";

@Component
export default class ManageAccounts extends Vue {
  openAddAccountModal() {
    Modals.SET_ADD_ACCOUNT_MODAL_VISIBILITY(true);
  }
}
</script>
