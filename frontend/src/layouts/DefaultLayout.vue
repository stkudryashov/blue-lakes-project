<template>
  <div class="layout-base">
    <the-header />

    <!-- Main Content -->
    <main class="layout-content">
      <slot />
    </main>
  </div>
</template>

<script>
import TheHeader from '../components/header/TheHeader.vue'


export default {
  name: 'MainLayout',
  components: {
    TheHeader
  }
}
</script>

<style scoped>

</style>