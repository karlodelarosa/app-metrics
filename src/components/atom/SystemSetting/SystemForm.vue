<template>
  <div>
    <div class="flex w-full flex-col mb-12">
      <div class="px-5">
        <SettingStatus />
        <div class="flex flex-row">
          <SystemStatusSchedule class="w-1/3 mx-1" />
          <SystemStatusSchedule class="w-1/3 mx-1" />
          <SystemStatusSchedule class="w-1/3 mx-1" />
        </div>
      </div>
      <hr class="divider" />
      <div class="pb-6 px-8 w-full">
        <div class="flex justify-end items-center w-full h-auto bg-gray-300">
          <p class="font-bold text-gray-600 uppercase text-xs">
            Enable editing
            <font-awesome-icon
              :icon="['fas', 'arrow-right']"
              class="icon alt"
            />
          </p>
          <button
            class="text-gray-700 rounded focus:outline-none focus:bg-gray-700 focus:text-white text-center bg-gray-400 px-4 py-2 m-2 hover:bg-gray-600 hover:text-white transition duration-100"
          >
            <font-awesome-icon :icon="['fas', 'lock']" class="icon alt" />
          </button>
        </div>

        <div class="p-5">
          <div class="mb-4 border-b border-gray-400 pb-3">
            <h1 class="font-black text-md uppercase">Setting</h1>
          </div>

          <div class="px-3">
            <label class="font-black text-sm">Select Term:</label>
            <div class="flex mb-4 w-full block">
              <select class="h-10 bg-gray-100 w-4/6 border border-gray-400">
                <option value="">1H 2020</option>
                <option value="">1H 2019</option>
                <option value="">1H 2019</option>
                <option value="">1H 2019</option>
              </select>

              <button
                class="bg-transparent text-xs font-black mx-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded transition duration-200 ease-in"
              >
                NEW
              </button>
            </div>

            <label class="font-black text-sm">Interim?</label>
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

          <div class="mt-6 mb-3">
            <h1
              class="font-black text-md uppercase border-b border-gray-400 pb-3 mt-16"
            >
              Setting Schedule
            </h1>
          </div>
          <p class="pb-6 text-sm italic text-gray-600">
            Set the timing of changing setting
          </p>
          <div class="flex flex-row items-center justify-between">
            <div class="flex flex-col">
              <label class="font-black text-sm mb-2">Set Schedule:</label>
              <DateTimePicker />
            </div>

            <div class="text-right">
              <h1 class="text-2xl font-bold">May 20, 2020</h1>
              <p class="text-gray-500">14:00:00 (PHT)</p>
            </div>
          </div>

          <div class="bg-blue-200 p-5 mt-6 rounded">
            <label class="font-black text-sm">Select Term:</label>
            <div class="flex mb-4 w-full block">
              <select class="h-10 bg-gray-100 w-4/6 border border-gray-400">
                <option value="">1H 2020</option>
                <option value="">1H 2019</option>
                <option value="">1H 2019</option>
                <option value="">1H 2019</option>
              </select>

              <button
                class="bg-transparent text-xs font-black mx-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded transition duration-200 ease-in"
              >
                NEW
              </button>
            </div>

            <label class="font-black text-sm">Interim?</label>
<!--            <div-->
<!--              class="relative rounded-full w-12 h-6 transition duration-200 ease-linear cursor-pointer mb-4"-->
<!--              :class="[toggle === '1' ? 'bg-green-400' : 'bg-gray-400']"-->
<!--              @click="toggle === '0' ? (toggle = '1') : (toggle = '0')"-->
<!--            >-->
<!--              <label-->
<!--                for="toggle"-->
<!--                class="absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-200 ease-linear cursor-pointer"-->
<!--                :class="[-->
<!--                  toggle === '1'-->
<!--                    ? 'translate-x-full border-green-400'-->
<!--                    : 'translate-x-0 border-gray-400'-->
<!--                ]"-->
<!--              ></label>-->
<!--              <input-->
<!--                type="checkbox"-->
<!--                id="toggle"-->
<!--                name="toggle"-->
<!--                class="appearance-none w-full h-full hidden active:outline-none focus:outline-none"-->
<!--                @click="toggle === '0' ? (toggle = '1') : (toggle = '0')"-->
<!--              />-->
<!--            </div>-->
          </div>
        </div>

        <div class="flex"></div>
      </div>
    </div>
    <div
      class="flex justify-end bg-gray-200 px-3 absolute left-0 right-0 bottom-0 rounded-br-lg"
    >
      <button
              class="text-xs bg-green-500 my-3 rounded hover:bg-green-600 text-white font-black px-4 py-2 transition duration-200 ease-in"
      >
        <font-awesome-icon :icon="['fas', 'save']" class="icon alt" /> SAVE
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import "vue2-datepicker/index.css";
export default {
  data() {
    return {
      toggle: 0
    };
  }
};
</script>
