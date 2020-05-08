<template>
  <div>
    <div class="bg-white shadow rounded-lg p-4 mb-4">
      <div class="flex items-center justify-between ">
        <button
          @click="goToComponent('dashboard')"
          type="button"
          class="px-4 py-2 mr-3 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:text-gray-800 transition duration-150 ease-in-out"
        >
          <font-awesome-icon
            :icon="['fas', 'arrow-left']"
            class="text-gray-500"
          />
          Back
        </button>

        <h3 class="text-2xl leading-6 font-bold text-gray-900">
          2H 2019
        </h3>
      </div>
    </div>

    <div class="grid grid-rows-3 grid-flow-col gap-4">
      <div class="row-span-3">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6 flex">
            <div class="w-5/6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Systems
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                List of all systems we maintain
              </p>
            </div>
          </div>

          <div class="cursor-pointer">
            <dl class="hover:bg-gray-100">
              <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm leading-5 font-medium text-green-500">
                  98.9%
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  Deborah
                </dd>
              </div>
            </dl>
            <dl class="hover:bg-gray-100">
              <div
                class="bg-indigo-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-gray-500">
                  91.3%
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  Kraken
                </dd>
              </div>
            </dl>
            <dl class="hover:bg-gray-100">
              <div
                class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm leading-5 font-medium text-orange-500">
                  93.7%
                </dt>
                <dd
                  class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                >
                  Gola
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="row-span-3 col-span-4">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6 flex">
            <div class="w-3/6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Kraken
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                SUP Breakdown
              </p>
            </div>

            <div class="w-3/6 relative">
              <button
                class="bg-blue-700 px-4 py-2 items-center justify-center text-sm leading-5 absolute right-0 font-medium rounded-md text-white hover:bg-blue-600 transition duration-150 ease-in-out"
              >
                <font-awesome-icon :icon="['fas', 'plus']" />
                Add Downtime
              </button>
            </div>
          </div>

          <div class="flex flex-col">
            <div
              class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              <div class="align-middle inline-block min-w-full overflow-hidden">
                <table id="supBreakdown" class="min-w-full">
                  <thead class="bg-gray-200">
                    <tr>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Contribution
                      </th>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Project info
                      </th>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Source
                      </th>
                      <th
                        class="px-6 py-3 border-b border-gray-200 bg-gray-50"
                      ></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <template v-for="i in 5">
                      <tr
                        :key="i"
                        class="hover:bg-gray-100 cursor-pointer transition duration-150 ease-in-out"
                      >
                        <td
                          class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                        >
                          <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                              <div
                                class="h-12 w-12 rounded-full border-orange-400 border-4 inline-flex text-xs font-bold text-center items-center justify-center"
                              >
                                13%
                              </div>
                            </div>
                            <div class="ml-4">
                              <div
                                class="text-sm leading-5 font-medium text-gray-900"
                              >
                                0.3 days
                              </div>
                              <div class="text-sm leading-5 text-gray-500">
                                22 hours and 4 minutes
                              </div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                        >
                          <div
                            class="text-sm leading-5 text-gray-900 font-bold"
                          >
                            Webview Removal
                          </div>
                          <div class="text-sm leading-5 text-gray-500">
                            Project Team 8
                          </div>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                        >
                          <a
                            href="#"
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-white text-red-800 border border-red-800 hover:bg-red-100 transition duration-150 ease-in-out"
                          >
                            <div
                              class="py-1 px-2 flex items-center justify-center"
                            >
                              <img
                                class="w-3 mr-1"
                                src="https://images.ctfassets.net/bx16dovk9m7p/3DWhAzcvSgyQmEw2oyIOAa/e99b557ca4f32c920e5fb63f46f07ed2/Redmine.png"
                                alt=""
                              />
                              <span>
                                Redmine
                              </span>
                            </div>
                          </a>
                        </td>
                        <td
                          class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                        >
                          <a
                            href="#"
                            class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                            >Edit</a
                          >
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!--123123123-->

          <div
            class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          >
            <div class="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Previous
              </a>
              <a
                href="#"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              >
                Next
              </a>
            </div>
            <div
              class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
            >
              <div>
                <p class="text-sm leading-5 text-gray-700">
                  Showing
                  <span class="font-medium">1</span>
                  to
                  <span class="font-medium">10</span>
                  of
                  <span class="font-medium">97</span>
                  results
                </p>
              </div>
              <div>
                <span class="relative z-0 inline-flex shadow-sm">
                  <button
                    type="button"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    3
                  </button>
                  <span
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700"
                  >
                    ...
                  </span>
                  <button
                    type="button"
                    class="hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    8
                  </button>
                  <button
                    type="button"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    9
                  </button>
                  <button
                    type="button"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
                  >
                    10
                  </button>
                  <button
                    type="button"
                    class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Template from "@/store/Template";

export default class SupAdminPanel extends Vue {
  goToComponent(payload: string) {
    Template.pageContentRequest(payload);
  }
}
</script>
