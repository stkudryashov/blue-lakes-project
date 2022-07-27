<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />

    <main class="flex flex-1">
      <slot />
    </main>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'

export default {
  name: 'MainLayout',
  components: {
    TheHeader
  }
}
</script>

<style scoped>

</style>