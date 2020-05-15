<template>
  <div class="flex items-center justify-center h-screen bg-gray-200">
    <div class="w-full max-w-xs">
      <transition name="fade">
        <div
          v-show="successfulLogin"
          class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-5"
          role="alert"
        >
          <font-awesome-icon :icon="['fas', 'spinner']" pulse />
          <p class="font-bold">{{ getApiMessage }}</p>
          <p class="text-xs">Please wait for a while</p>
        </div>
      </transition>
      <transition name="fade">
        <div
          v-show="hasUsernameError || hasPasswordError || hasErrors"
          :class="
            hasUsernameError || hasPasswordError || hasErrors
              ? 'error-again'
              : ''
          "
          class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5"
          role="alert"
        >
          <p class="font-bold">Holy smokes!</p>
          <p class="text-xs">{{ this.$data.errors[0] }}</p>
          <p class="text-xs">{{ this.$data.usernameUIErrors[0] }}</p>
          <p class="text-xs">{{ this.$data.passwordUIErrors[0] }}</p>
        </div>
      </transition>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            ref="username"
            :class="
              hasUsernameError || hasErrors ? 'border border-red-500' : ''
            "
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            @keyup.enter="login()"
            :disabled="successfulLogin"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            ref="password"
            :class="
              hasPasswordError || hasErrors ? 'border border-red-500' : ''
            "
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            @keyup.enter="login()"
            :disabled="successfulLogin"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="login()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            :disabled="successfulLogin"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            :disabled="successfulLogin"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Dev 1. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LoginService } from "@/Application/LoginService";

@Component
export default class Login extends Vue {
  get hasErrors() {
    return this.$data.errors.length >= 1;
  }
  get hasUsernameError() {
    return this.$data.usernameUIErrors.length >= 1;
  }
  get hasPasswordError() {
    return this.$data.passwordUIErrors.length >= 1;
  }
  get successfulLogin() {
    return this.$data.loginSuccess;
  }
  get getApiMessage() {
    return this.$data.apiMessage;
  }

  $refs!: {
    username: HTMLInputElement;
    password: HTMLInputElement;
  };

  async login() {
    this.$data.errors = [];
    const username = this.$refs.username.value;
    const password = this.$refs.password.value;
    const validateUsername = this.checkUsername(username);
    const validatePassword = this.checkPassword(password);

    if (validateUsername && validatePassword) {
      const loginService = new LoginService(username, password);
      const authenticationResponse = await loginService.validate();
      this.$data.apiMessage = authenticationResponse.message;

      if (authenticationResponse.success) {
        this.clearErrors();
        this.$data.loginSuccess = true;
        setTimeout(() => {
          this.$router.push("/dashboard");
        }, 1500);
      } else {
        this.$data.errors.push(authenticationResponse.message);
      }
    }
  }

  clearErrors() {
    this.$data.errors = [];
    this.$data.usernameUIErrors = [];
    this.$data.passwordUIErrors = [];
  }

  checkUsername(username: string) {
    this.$data.usernameUIErrors = [];
    if (username === "") {
      this.$data.usernameUIErrors.push(
        LoginService.ERROR_MESSAGES.USERNAME_EMPTY
      );
      return false;
    }
    return true;
  }

  checkPassword(password: string) {
    this.$data.passwordUIErrors = [];
    if (password === "") {
      this.$data.passwordUIErrors.push(
        LoginService.ERROR_MESSAGES.PASSWORD_EMPTY
      );
      return false;
    } else {
      if (password.length < LoginService.ERROR_MESSAGES.PASSWORD_MIN_LENGTH) {
        this.$data.passwordUIErrors.push(
          LoginService.ERROR_MESSAGES.PASSWORD_LENGTH_ERROR
        );
        return false;
      }
    }
    return true;
  }

  mounted() {
    this.$refs.username.focus();
  }

  data() {
    return {
      errors: [],
      usernameUIErrors: [],
      passwordUIErrors: [],
      loginSuccess: false,
      apiMessage: ""
    };
  }
}
</script>

<style scoped></style>
