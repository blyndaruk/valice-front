<template>
  <div class='register-form'>
    <h1 class='text-2xl mb-3 text-center'>Registration</h1>
    <form @submit.prevent='processForm'>
      <label for='username' class='field border'>
        <input
          id='username'
          v-model='username'
          type='text'
          autocomplete='username'
          placeholder='Enter your name'
        />
      </label>
      <label for='password' class='field border'>
        <input
          id='password'
          v-model='password'
          type='password'
          autocomplete='current-password'
          placeholder='Enter password'
        />
      </label>

      <div class='ml-auto mr-auto mt-5 flex justify-center'>
        <button type='submit' class='button button--auth px-8 py-3 border-2 rounded'>
          Register
        </button>
      </div>

    </form>
    <p v-if='registerSuccessful' class='success-msg text-center'>Registration successful!</p>
    <p v-if='errorMessage && !registerSuccessful' class='error-msg text-center'>{{ errorMessage }}</p>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import type { PropOptions } from 'vue'
import axios from 'axios'

// just for test
interface User {
  firstName: string
  lastName: string
}

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {},
    } as PropOptions<User>
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      registerSuccessful: false,
    }
  },

  methods: {
    processForm(): void {
      axios
        .post(`${process.env.VUE_APP_AUTH_API}/registration/`, {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.registerSuccessful = true
          setTimeout(() => {
            this.registerSuccessful = false
          }, 4000)
        })
        .catch((error) => {
          this.errorMessage = error.response?.data?.message
          this.registerSuccessful = false
        })
    }
  }
})
</script>

<style scoped lang='scss'>
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
    height: 40px;
    font-size: 16px;
  }
}

.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  line-height: 1;
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
