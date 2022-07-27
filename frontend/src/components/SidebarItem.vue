<template>
  <div class="sidebar-item">
    <div v-if="prepend" class="sidebar-item-icon mr-2">
      <slot />
    </div>

    <span v-if="!hidden" class="truncate">
      {{ title }}
    </span>

    <div v-if="!prepend" class="sidebar-item-icon ml-2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    title: {
      type: String,
      required: true
    },
    prepend: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.sidebar-item {
  @apply flex items-center text-gray-400 hover:bg-gray-900 hover:text-white cursor-pointer px-3 h-12;
}

.sidebar-item-icon {
  @apply flex items-center;
}
</style>