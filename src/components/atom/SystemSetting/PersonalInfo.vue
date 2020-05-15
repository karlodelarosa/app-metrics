<template>
  <transition name="firstslide">
    <div
      class="w-full px-12 pt-4 mt-6 p-5 min-w-full"
      style="min-height: 400px"
    >
      <div class="flex justify-center items-center h-6 mt-6 mb-12 flex-col">
        <font-awesome-icon :icon="['fas', 'user-tie']" size="lg" />
        <p class="text-black font-black text-xs uppercase pt-3">
          Personal info
        </p>
      </div>
      <transition name="scale">
        <div
          v-show="errors.error"
          class="w-full h-6 bg-red-500 rounded-lg mb-6 text-center text-sm text-white"
        >
          {{ errors.message }}
        </div>
      </transition>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            v-model="firstName"
            :class="{ 'border-red-300': hasError.firstName }"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Karlo"
          />
          <p v-show="hasError.firstName" class="text-red-500 text-xs italic">
            First name is required.
          </p>
        </div>
        <div class="w-full md:w-1/3 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Middle Name
          </label>
          <input
            v-model="middleName"
            :class="{ 'border-red-300': hasError.middleName }"
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
            v-model="lastName"
            :class="{ 'border-red-300': hasError.lastName }"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Dela Rosa"
          />
          <p v-show="hasError.lastName" class="text-red-500 text-xs italic">
            Last name is required.
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Birthdate
          </label>
          <div class="flex flex-row">
            <div class="md:w-1/6 sm:w-1/3">
              <select
                v-model="birthDate.year"
                :class="{ 'border-red-300': hasError.birthDate.year }"
                class="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="null" disabled>Year</option>
                <option v-for="i in years" :value="i" :key="i">{{ i }}</option>
              </select>
              <p
                v-show="hasError.birthDate.year"
                class="text-red-500 text-xs italic"
              >
                Year is required.
              </p>
            </div>
            <div class="md:w-1/6 sm:w-1/3 mx-2">
              <select
                :disabled="birthDate.year === null"
                @change="adjustDays()"
                v-model="birthDate.month"
                :class="{ 'border-red-300': hasError.birthDate.month, 'bg-gray-400 cursor-not-allowed': birthDate.year === null }"
                class="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="null" disabled>Month</option>
                <option
                  v-for="(value, i) in monthList"
                  :value="value"
                  :key="i"
                  >{{ i }}</option
                >
              </select>
              <p
                v-show="hasError.birthDate.month"
                class="text-red-500 text-xs italic"
              >
                Month is required.
              </p>
            </div>

            <div class="md:w-1/6 sm:w-1/3">
              <select
                :disabled="birthDate.month === null"
                v-model="birthDate.day"
                :class="{ 'border-red-300': hasError.birthDate.day, 'bg-gray-400 cursor-not-allowed': birthDate.month === null }"
                class="block h-12 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option :value="null" disabled>Day</option>
                <option v-for="i in days" :key="i">{{ i }}</option>
              </select>
              <p
                v-show="hasError.birthDate.day"
                class="text-red-500 text-xs italic"
              >
                Day is required
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-16 mt-8 flex justify-end">
        <button
          @click="submitPersonalInfo()"
          class="text-xs bg-green-500 rounded hover:bg-green-600 text-white font-black px-4 py-2 transition duration-150 ease-in"
        >
          Submit
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PersonalInformation from "@/store/Domain/Accounts/PersonalInformation";
import Calendar from "@/store/utilities/Calendar";
import Accounts from "@/store/Accounts";

@Component
export default class PersonalInfo extends Vue {
  get errors() {
    return PersonalInformation.getErrors;
  }

  get monthList() {
    return Calendar.getMonthNames;
  }

  get years() {
    return Calendar.getYears;
  }

  get days() {
    return Calendar.getDays;
  }

  submitPersonalInfo() {
    this.checkUIInputs();

    if (
      !this.$data.hasError.firstName &&
      !this.$data.hasError.lastName &&
      !this.$data.hasError.birthDate.day &&
      !this.$data.hasError.birthDate.month &&
      !this.$data.hasError.birthDate.year
    ) {
      PersonalInformation.processInputs({
        firstName: this.$data.firstName,
        middleName: this.$data.middleName,
        lastName: this.$data.lastName,
        birthDate: this.$data.birthDate
      });
      this.next();
    }
  }

  adjustDays() {
    const year = this.$data.birthDate.year;
    const month = this.$data.birthDate.month;

    Calendar.SET_SELECTED_YEAR(year);
    Calendar.SET_SELECTED_MONTH(month);
  }

  checkUIInputs() {
    this.resetError();
    if (this.$data.firstName === null) {
      this.$data.hasError.firstName = true;
    }

    if (this.$data.lastName === null) {
      this.$data.hasError.lastName = true;
    }

    if (this.$data.birthDate.day === null) {
      this.$data.hasError.birthDate.day = true;
    }

    if (this.$data.birthDate.month === null) {
      this.$data.hasError.birthDate.month = true;
    }

    if (this.$data.birthDate.year === null) {
      this.$data.hasError.birthDate.year = true;
    }
  }

  resetError() {
    this.$data.hasError.firstName = false;
    this.$data.hasError.lastName = false;
    this.$data.hasError.birthDate.day = false;
    this.$data.hasError.birthDate.month = false;
    this.$data.hasError.birthDate.year = false;
  }

  next() {
    Accounts.nextStep();
  }

  data() {
    return {
      firstName: null,
      middleName: null,
      lastName: null,
      birthDate: {
        day: null,
        month: null,
        year: null
      },
      hasError: {
        firstName: false,
        lastName: false,
        birthDate: {
          day: false,
          month: false,
          year: false
        }
      },
      calendar: {
        year: null,
        month: null,
        date: null
      }
    };
  }
}
</script>
