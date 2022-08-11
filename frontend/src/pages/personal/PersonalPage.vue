<template>
  <sidebar>
    <router-link :to="{name: 'Profile'}">
      <sidebar-item title="Личный кабинет">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      </sidebar-item>
    </router-link>

    <router-link :to="{name: 'Servers'}">
      <sidebar-item title="Статус серверов" v-if="permissions.includes('servers_status')" >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      </sidebar-item>
    </router-link>
  </sidebar>

  <section class="flex-1">
    <router-view />
  </section>
</template>

<script>
import Sidebar from '../../components/sidebar/Sidebar.vue'
import SidebarItem from '../../components/sidebar/SidebarItem.vue'

import PersonalPageArea from './PersonalPageArea.vue'
import PersonalPageServers from './PersonalPageServers.vue'


export default {
  name: 'PersonalPage',
  components: {
    Sidebar,
    SidebarItem,
    PersonalPageArea,
    PersonalPageServers
  },
  data() {
    return {
      currentTab: 'PersonalPageArea'
    }
  },
  computed: {
    permissions() {
      return Array.from(this.$store.getters['AuthModule/getUserPermissions'])
    }
  },
}
</script>

<style scoped>

</style>