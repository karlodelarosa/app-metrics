<template>
  <div class="p-5">
    <AddAccountFormModal />
    <div class="flex justify-end">
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

    <div class="flex flex-col">
      <template v-for="i in 3">
        <div
          :key="i"
          @click="openConfirmModal()"
          class="account-container p-5 mb-4 hover:bg-gray-200 cursor-pointer align-middle inline-block min-w-full border border-gray-300 shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
              <div class="flex flex-row items-center">
                <div class="flex-shrink-0 h-10 w-10 mr-2">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <h2
                  class="text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
                >
                  Karlo Dela Rosa
                </h2>
              </div>
              <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                <div
                  class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6"
                >
                  <div class="rounded-full h-3 w-3 bg-green-500 mr-1"></div>
                  Active
                </div>
                <div
                  class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6"
                >
                  <i class="fa fa-user-tie mr-1"></i>
                  Member
                </div>
                <div
                  class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6"
                >
                  <i class="fa fa-users mr-1"></i>
                  UX/UI Team
                </div>
              </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
              <span class="hidden sm:block shadow-sm rounded-md">
                <button
                  @click="openConfirmModal()"
                  type="button"
                  class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 active:bg-gray-50 transition duration-150 ease-in-out"
                >
                  <svg
                    class="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                    />
                  </svg>
                  Edit
                </button>
              </span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Template from "@/store/Template";
import Modals from "@/store/Modals";

@Component
export default class ManageAccounts extends Vue {
  openConfirmModal() {
    Template.SET_CONFIRMATION_MODAL(true);
  }

  openAddAccountModal() {
    Modals.SET_ADD_ACCOUNT_MODAL_VISIBILITY(true);
  }
}
</script>
