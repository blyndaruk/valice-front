<template>
  <div class="auth-view">
    <div class="auth-forms">
      <register-form/>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { setup, Options, Vue } from 'vue-class-component';
import { useMeta } from 'vue-meta';
// import { Component } from 'vue-class-component';

import RegisterForm from '../../components/RegisterForm.vue';

@Options({
  components: {
    RegisterForm,
  },
})

export default class Auth extends Vue {
  meta = setup(() => useMeta(
    computed(() => ({
      title: 'Authentication',
    })),
  ));
}
</script>

<style scoped lang="scss">

</style>
