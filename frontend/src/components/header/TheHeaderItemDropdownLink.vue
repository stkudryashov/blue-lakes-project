<template>
  <div class="header-item-dropdown-link">
    <span class="truncate">
      {{ title }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderItemDropdownLink',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.header-item-dropdown-link {
  @apply w-full p-2 text-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer;
}
</style>