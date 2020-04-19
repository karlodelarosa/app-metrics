<template>
  <div class="antialiased flex bg-gray-100 min-h-screen">
    <Header />
    <div class="mt-16 p-2 bg-gray-100 container mx-auto">
      <div class="rounded-lg shadow-lg mt-6 mb-3">

        <div class="flex mb-4">
          <div class="w-1/4 bg-gray-300 rounded-l-lg p-5 opacity-75 blur">
            <h2 class="text-2xl font-bold text-gray-800 mb-12">
              <i class="fa fa-cogs text-sm text-gray-600"></i>
              Settings
            </h2>

            <p class="font-black text-gray-600 font-sans text-xs border-b-2 border-gray-400 pb-3 mt-6 mb-2 w-full">GENERAL</p>
            <button class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out">
              <label class="text-sm font-bold">
                <i class="fa fa-wrench"></i>
                System
              </label>
            </button>

            <p class="font-black text-gray-600 font-sans text-xs border-b-2 border-gray-400 pb-3 mt-6 mb-2 w-full">METRICS</p>
            <button class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out">
              <label class="text-sm font-bold">
                <i class="fa fa-chart-line"></i>
                SUP
              </label>
            </button>

            <p class="font-black text-gray-600 font-sans text-xs border-b-2 border-gray-400 pb-3 mt-6 mb-2 w-full">PEOPLE</p>
            <button class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out">
              <label class="text-sm font-bold">
                <i class="fa fa-users"></i>
                User
              </label>
            </button>

            <button class="w-full my-1 text-left px-4 py-2 rounded-full hover:bg-gray-400 focus:text-blue-600 focus:bg-white focus:outline-none transition duration-150 ease-in-out">
              <label class="text-sm font-bold">
                <i class="fa fa-universal-access"></i>
                Privilege
              </label>
            </button>
          </div>

          <div class="w-3/4 bg-white rounded-r-lg p-5">
            <h2 class="text-2xl font-bold text-gray-800 border-b pb-2">
              System
            </h2>
            <div class="p-5">
              asd
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
