<template>
  <div class="antialiased h-screen bg-gray-200">
    <Dashboard/>
    <SystemSetting/>

    <div class="pt-16" v-show="noActivePage">
      <div class="mt-5 text-center">
        LANDING PAGE
      </div>
    </div>
  </div>
</template>
