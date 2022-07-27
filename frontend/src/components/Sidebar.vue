<template>
  <aside class="bg-gray-800 w-64" :class="{ 'w-12': isCollapsed }" style="transition: width 0.5s ease">
    <div class="flex flex-col">
      <!-- Collapse Button -->
      <div @click="isCollapsed = !isCollapsed" class="flex items-center justify-end px-3 h-12 text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 h-8 sidebar-icon" :class="{ 'rotate-180': isCollapsed }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
      </div>

      <!-- Sidebar Items -->
      <sidebar-item title="Поиск" :hidden="isCollapsed">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </sidebar-item>

      <sidebar-item title="Принять смену" :hidden="isCollapsed">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      </sidebar-item>
    </div>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem.vue';

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  data() {
    return {
      isCollapsed: true
    }
  }
}
</script>

<style scoped>
.sidebar-icon {
  transition: 0.5s ease;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.5s ease;
}
</style>