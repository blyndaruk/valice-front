<template>
  <metainfo>
    <template v-slot:title="{ content }">
      {{ content ? `${content} | ${title}` : `${title}` }}
    </template>
  </metainfo>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/auth">Auth</router-link>
  </div>
  <router-view/>
</template>

<script>
import { setup, Vue } from 'vue-class-component';
import { useMeta } from 'vue-meta';

export default class App extends Vue {
  title = process.env.VUE_APP_SITE_NAME || 'Valice';

  meta = setup(() => useMeta({
    title: '',
    htmlAttrs: {
      lang: 'en',
      amp: false,
    },
  }))
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
