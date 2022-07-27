<template>
  <RouterView />
</template>

<script setup>
import axios from 'axios'

import TheHeader from './components/TheHeader.vue'

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
</script>

<style>
body {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}
</style>