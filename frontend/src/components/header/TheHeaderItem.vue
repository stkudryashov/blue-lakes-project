<template>
  <div class="header-item">
    <div v-if="prepend" class="header-item-icon mr-2">
      <slot />
    </div>

    <span class="truncate">
      {{ title }}
    </span>

    <div v-if="!prepend" class="header-item-icon ml-2">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderItem',
  props: {
    title: {
      type: String,
      required: true
    },
    prepend: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.header-item {
  @apply flex items-center hover:bg-gray-900 hover:text-white cursor-pointer px-3 h-16;
}

.header-item-icon {
  @apply flex items-center;
}
</style>