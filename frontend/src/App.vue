<template>
  <Component :is="layout">
    <RouterView />
  </Component>
</template>

<script>
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'

import DefaultLayout from "./layouts/DefaultLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";

export default {
  components: {
    DefaultLayout,
    EmptyLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  }
}
</script>

<style>
body {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}
</style>