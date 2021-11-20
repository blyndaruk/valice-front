<template>
  <div class='auth-view'>
    <div class='auth-forms'>
      <register-form />
    </div>
  </div>
</template>

<script>
import RegisterForm from '~/components/Auth/Registration/RegisterForm/RegisterForm'

export default {
  components: {
    RegisterForm
  }
}
</script>
