<template>
  <TheHeader />
  <TheLoginForm />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import TheLoginForm from './components/TheLoginForm.vue';

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'
</script>

<style>
body {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}
</style>
