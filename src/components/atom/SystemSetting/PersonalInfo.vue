<template>
  <transition name="firstslide">
    <form class="w-full px-12 pt-4 mt-6 p-5 min-w-full" style="min-height: 400px">
      <div class="flex justify-center items-center bg-indigo-500 h-6 mb-5">
        <p class="text-white font-black text-xs uppercase">Personal info</p>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Karlo"
          />
<!--          <p class="text-red-500 text-xs italic">-->
<!--            Please fill out this field.-->
<!--          </p>-->
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Middle Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"

            type="text"
            placeholder="Rodriguez"
          />
        </div>

          <div class="w-full md:w-1/3 px-3">
              <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-last-name"
              >
                  Last Name
              </label>
              <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Dela Rosa"
              />
          </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-password"
          >
            Birthdate
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="date"
            placeholder="******************"
          />
          <p class="text-gray-600 text-xs italic">
            Your most precious day!!
          </p>
        </div>
      </div>
    </form>
  </transition>
</template>
