<template>
  <div class="p-5">
    <div class="flex flex-row">
      <div class="w-4/6 p-5 mr-2">
        <h1 class="text-2xl leading-7 font-bold border-b border-gray-300 pb-2">
          <font-awesome-icon :icon="['far', 'edit']" class="text-sm" /> Edit
        </h1>
        <div class="flex flex-col mt-8">
          <label class="text-xs font-black">NAME:</label>
          <input
            type="text"
            class="border border-gray-300 rounded bg-gray-100 px-2 h-8"
            value="Team Phoenix"
          />
        </div>
        <div class="flex flex-col mt-8">
          <label class="text-xs font-black">MEMBERS:</label>
          <ul class="list-decimal ml-8">
            <li
              v-for="x in 5"
              :key="x"
              @click="selectMember(x)"
              :class="{ 'bg-gray-300': memberSelected === x }"
              class="item-press my-1 cursor-pointer hover:bg-gray-200 p-1"
            >
              <div class="flex flex-row justify-between">
                <label class="flex items-center justify-center">Karlo</label>
                <div v-show="memberSelected === x" >
                  <button
                    class="h-6 px-1 text-xs shadow rounded text-red-500 bg-white flex items-center justify-center hover:bg-red-500 hover:text-white"
                  >
                    <font-awesome-icon :icon="['fas', 'trash']" size="xs" class="mr-1" />
                    Remove
                  </button>
                </div>
              </div>
            </li>
            <li
              @click="
                toggleAddMember();
                clearSelectedMember();
              "
              v-if="!isActiveAddMember"
              class="my-1 text-gray-500 cursor-pointer hover:text-gray-700"
            >
              Click to add new member
            </li>
            <li
              v-else
              @focusout="toggleAddMember()"
              class="mt-1 text-gray-800 cursor-pointer hover:text-gray-700"
            >
              <input ref="txtAddMember" type="text" class="w-full" />
            </li>
            <div v-show="isActiveAddMember" class="flex justify-between">
              <label class="text-xs text-gray-500">Click enter to save</label>
              <div>
                <button class="w-8 h-8 shadow rounded mx-1">
                  <font-awesome-icon
                    :icon="['fas', 'check']"
                    class="text-green-500 text-"
                  />
                </button>
                <button class="w-8 h-8 shadow rounded">
                  <font-awesome-icon
                    :icon="['fas', 'times']"
                    class="text-red-500 text-"
                  />
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="w-2/6 rounded-lg overflow-hidden">
        <div class="title bg-gray-700 px-2 py-3 border-t bor">
          <p class="font-black text-xs text-white uppercase text-center">
            List
          </p>
        </div>
        <ul class="bg-gray-200">
          <li
            v-for="i in 8"
            @click="selectItem(i)"
            :key="i"
            :class="{
              'bg-gray-800 text-white hover:bg-gray-700 border-indigo-500':
                itemSelected === i
            }"
            class="item-press py-2 px-5 border-l-4 border-transparent hover:border-indigo-500 hover:bg-gray-300 transition duration-100 cursor-pointer"
          >
            <p class="text-sm font-black">Team Phoenix</p>
            <p class="text-xs font-bold text-gray-500">TEAM {{ i }}</p>
          </li>
          <transition name="shrink">
            <li v-show="isActiveAddItem" class="py-2 px-2 bg-gray-200">
              <input
                @keydown.esc="toggleAddItemInput()"
                ref="txtAddTeam"
                type="text"
                class="w-full bg-white py-2 px-2 text-sm"
              />
              <label class="mx-2 text-xs text-gray-500"
                >Press escape to cancel</label
              >
            </li>
          </transition>
          <button
            @click="toggleAddItemInput()"
            :class="{
              'bg-red-500': isActiveAddItem,
              'bg-green-500': !isActiveAddItem
            }"
            class="w-full py-2 px-5 text-white hover:opacity-75 transition duration-100 cursor-pointer text-xs font-black"
          >
            <font-awesome-icon
              v-if="!isActiveAddItem"
              :icon="['fas', 'plus-circle']"
            />
            <font-awesome-icon v-else :icon="['fas', 'trash']" />
            {{ buttonText }}
          </button>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TeamSettings extends Vue {
  $refs!: {
    txtAddTeam: HTMLInputElement;
    txtAddMember: HTMLInputElement;
  };

  get isActiveAddItem() {
    return this.$data.activeAddItem;
  }

  get isActiveAddMember() {
    return this.$data.activeAddMember;
  }

  get buttonText() {
    if (this.$data.activeAddItem) {
      return "Cancel";
    }
    return "Add New Team";
  }

  toggleAddItemInput() {
    this.$data.activeAddItem = !this.$data.activeAddItem;
    this.$nextTick(() => {
      this.$refs.txtAddTeam.focus();
    });
  }

  toggleAddMember() {
    this.$data.activeAddMember = !this.$data.activeAddMember;
    console.info(this.$data.activeAddMember);
    this.$nextTick(() => {
      this.$refs.txtAddMember.focus();
    });
  }

  selectItem(itemNumber: number) {
    this.$data.itemSelected = itemNumber;
  }

  selectMember(itemNumber: number) {
    this.$data.memberSelected = itemNumber;
  }

  clearSelectedMember() {
    this.$data.memberSelected = 0;
  }

  data() {
    return {
      activeAddItem: false,
      activeAddMember: false,
      itemSelected: 1,
      memberSelected: 0
    };
  }
}
</script>
