<template>
  <div class="relative h-full">
    <!-- Current Club -->
    <the-header-item title="Волгоградская" :prepend="false" @click="showDropdown = !showDropdown">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </the-header-item>

    <!-- Change Club -->
    <div v-if="showDropdown" class="absolute right-0 top-full z-10">
      <div class="bg-gray-800 w-56 flex flex-col items-start overflow-hidden rounded-b">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderItem from './TheHeaderItem.vue'

export default {
  name: 'TheHeaderItemDropdown',
  components: {
    TheHeaderItem
  },
  data() {
    return {
      showDropdown: false
    }
  }
}
</script>

<style scoped>

</style>