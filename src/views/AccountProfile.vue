<template>
  <div class="antialiased flex min-h-screen bg-no-repeat">
    <Header />
    <div class="mt-16 w-full" :class="gradientColor">
      <div class="flex flex-row justify-end mt-3 mr-5">
        <button
          @click="changeBackground(1)"
          class="w-4 h-4 border border-white mx-1 bg-gray-800 rounded hover:opacity-75"
        ></button>
        <button
          @click="changeBackground(2)"
          class="w-4 h-4 border border-white mx-1 bg-red-500 rounded hover:opacity-75"
        ></button>
        <button
          @click="changeBackground(3)"
          class="w-4 h-4 border border-white mx-1 bg-teal-300 rounded hover:opacity-75"
        ></button>
      </div>

      <div class="flex justify-center items-center flex-col">
        <img
          class="profile-img rounded-full mt-12 border-4 border-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />

        <div class="mt-12 text-center">
          <h1 class="font-black text-2xl">Karlo Dela Rosa</h1>
          <p>Developer</p>
        </div>

        <div>
          <font-awesome-icon :icon="['fas', 'abacus']" />
        </div>
        <div class="w-1/3 mt-8">
          <p class="text-center italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi
            aperiam aspernatur autem, corporis debitis dolore eum excepturi
            explicabo illum in mollitia natus, nisi nulla obcaecati perferendis
            recusandae unde vel?
          </p>
        </div>

        <div class="w-2/3 mt-24">
          <div class="flex flex-row">
            <div class="w-1/3 flex flex-col items-center justify-center py-3">
              <font-awesome-icon size="3x" :icon="['far', 'heart']" />
              <h1 class="font-bold mt-3">24 hours ago</h1>
              <p class="text-sm text-gray-600">Last Activity</p>
            </div>
            <div class="w-1/3 flex flex-col items-center justify-center py-3">
              <font-awesome-icon size="3x" :icon="['far', 'chart-bar']" />
              <h1 class="font-bold mt-3">435 items</h1>
              <p class="text-sm text-gray-600">Contribution</p>
            </div>
            <div class="w-1/3 flex flex-col items-center justify-center py-3">
              <font-awesome-icon size="3x" :icon="['far', 'id-card']" />
              <h1 class="font-bold mt-3">master@test.com</h1>
              <p class="text-sm text-gray-600">Username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AccountProfile extends Vue {
  get gradientColor() {
    if (this.$data.colorId === 1) {
      return "v-gray-dark-gradient";
    } else if (this.$data.colorId === 2) {
      return "v-red-light-gradient";
    } else if (this.$data.colorId === 3) {
      return "v-teal-light-gradient";
    } else {
      return "bg-gray-200";
    }
  }

  changeBackground(colorValue: number) {
    this.$data.colorId = colorValue;
  }

  data() {
    return {
      colorId: 1
    };
  }
}
</script>
