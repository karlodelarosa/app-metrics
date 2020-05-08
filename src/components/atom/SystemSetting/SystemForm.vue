<template>
  <div>
    <div class="flex">
      <div class="py-8 px-12 w-2/3">
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

        <div class="mt-6 mb-6">
          <button
            class="border border-blue-500 text-blue-500 py-2 px-4 rounded-full font-black text-xs uppercase hover:bg-blue-500 hover:text-white transition duration-100"
          >
            Set Schedule
          </button>
        </div>
      </div>
    </div>
    <div
      class="flex bg-gray-200 px-3 absolute left-0 right-0 bottom-0 rounded-br-lg"
    >
      <div class="w-1/2 flex items-center justify-start">
        <button
          class="text-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white text-center bg-gray-400 px-4 py-2 m-2 hover:bg-gray-600 hover:text-white transition duration-100"
        >
          <font-awesome-icon :icon="['fas', 'lock']" class="icon alt" />
        </button>
        <p class="font-bold text-gray-600 uppercase text-xs">
          <font-awesome-icon :icon="['fas', 'arrow-left']" class="icon alt" />
          Enable editing
        </p>
      </div>
      <div class="w-1/2 flex items-center justify-end px-3">
        <button
          class="text-xs bg-green-500 rounded hover:bg-green-600 text-white font-black px-4 py-2 transition duration-200 ease-in"
        >
          <font-awesome-icon :icon="['fas', 'save']" class="icon alt" /> SAVE
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      toggle: 0
    };
  }
};
</script>
