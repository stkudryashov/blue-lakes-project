<template>
  <header class="bg-gray-800">
    <div class="container mx-auto text-sm">
      <div class="flex justify-between items-center flex-wrap text-gray-400">
        <!-- Header Sections -->
        <div class="flex items-center flex-wrap">
          <!-- Logo -->
          <a href="" class="block w-46 mr-12 flex-shrink-0">
            <img src="/logo.png" alt="Logo" class="h-8">
          </a>

          <!-- Client Base -->
          <router-link :to="{name: 'Clients'}">
            <TheHeaderItem title="База клиентов">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </TheHeaderItem>
          </router-link>

          <!-- Financial Table -->
          <TheHeaderItem title="Финансовая таблица" v-if="permissions.includes('finances')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </TheHeaderItem>

          <!-- Statistics -->
          <TheHeaderItem title="Статистики" v-if="permissions.includes('statistics')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </TheHeaderItem>

          <!-- Marketing -->
          <TheHeaderItem title="Маркетинг" v-if="permissions.includes('marketing')">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </TheHeaderItem>
        </div>

        <!-- Personal Area -->
        <div class="flex items-center">
          <!-- User -->
          <router-link :to="{name: 'Personal'}">
            <TheHeaderItem :title="user.username" :prepend="false">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </TheHeaderItem>
          </router-link>

          <!-- Club -->
          <TheHeaderItemDropdown
              :current_club="user.current_club.street"
              v-if="permissions.includes('can_change_club')"
          >
            <TheHeaderItemDropdownLink title="Академика Глушко" />
            <TheHeaderItemDropdownLink title="Хусаина Мавлютовао" />
            <TheHeaderItemDropdownLink title="Набережные Челны" />
            <TheHeaderItemDropdownLink title="Нижнекамск" />
          </TheHeaderItemDropdown>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TheHeaderItem from './TheHeaderItem.vue';
import TheHeaderItemDropdown from './TheHeaderItemDropdown.vue';
import TheHeaderItemDropdownLink from './TheHeaderItemDropdownLink.vue';

export default {
  name: 'TheHeader',
  components: {
    TheHeaderItem,
    TheHeaderItemDropdown,
    TheHeaderItemDropdownLink
  },
  computed: {
    user() {
      return this.$store.getters['AuthModule/getUserInfo']
    },
    permissions() {
      return this.$store.getters['AuthModule/getUserPermissions']
    }
  },
}
</script>

<style scoped>
.router-link-active {
  @apply text-white;
}
</style>