<template>
  <div class="ml-3 relative" @focusout="isOpenAccountOptions = false">
    <div>
      <button
        @click="toggleAccountOptionsState()"
        class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
      >
        <img
          class="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
    </div>
    <transition name="fade">
      <div v-show="isOpenAccountOptions">
        <div
          class="py-2 rounded-md bg-white shadow-xs absolute right-0 mt-1 w-48 shadow-md"
        >
          <a
            href="#"
            @click="goToComponent('myAccount')"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            <i class="fa fa-user-circle"></i>
            Your Profile
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >Settings</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            >Sign out</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Template from "@/store/Template";

@Component
export default class AccountOptions extends Vue {
  goToComponent(payload: string) {
    Template.pageContentRequest(payload);
  }

  logout() {
    localStorage.removeItem("activePage");
    this.$router.push("/");
  }

  toggleAccountOptionsState() {
    this.$data.isOpenAccountOptions = !this.$data.isOpenAccountOptions;
    console.info(this.$data.isOpenAccountOptions);
  }

  data() {
    return {
      isOpenAccountOptions: false
    };
  }
}
</script>
