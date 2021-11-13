<template>
  <div class="register-form">
    <h1>Registration</h1>
    <form @submit.prevent="processForm">
      <label for="username" class="field">
        <input id="username" type="text" v-model="username" autocomplete="username" />
      </label>
      <label for="password" class="field">
        <input id="password" type="password" v-model="password" autocomplete="current-password" />
      </label>

      <button type="submit" class="button button--auth">Register</button>
    </form>
    <p v-if="registerSuccessful" class="success-msg">Registration successful!</p>
    <p v-if="errorMessage && !registerSuccessful" class="error-msg">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import axios from 'axios';

export default class RegisterForm extends Vue {
  username = '';
  password = '';
  errorMessage = '';
  registerSuccessful = false;

  processForm(): void {
    console.log(process.env.VUE_APP_AUTH_API, 'env');
    axios
      .post(`${process.env.VUE_APP_AUTH_API}/registration/`, {
        username: this.username,
        password: this.password,
      })
      .then((response) => {
        console.log(response);
        this.registerSuccessful = true;
      })
      .catch((error) => {
        this.errorMessage = error.response?.data?.message;
        console.log(this.errorMessage);
      });
  }
}
</script>

<style scoped lang="scss">
.register-form {
  max-width: 400px;
  margin: 40px auto 0;
}

.field {
  display: block;

  & + & {
    margin-top: 20px;
  }

  input {
    width: 100%;
    padding: 10px;
    height: 30px;
    font-size: 16px;
  }
}

.button {
  margin-top: 20px;
  width: 100px;
  height: 40px;
  cursor: pointer;
}

.error-msg {
  margin-top: 10px;
  color: #8f0000;
  font-size: 14px;
}

.success-msg {
  margin-top: 20px;
  font-size: 18px;
  color: green;
}
</style>
