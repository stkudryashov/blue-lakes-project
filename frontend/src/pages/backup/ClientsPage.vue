<template>
  <sidebar>
    <sidebar-item title="Поиск">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </sidebar-item>

    <sidebar-item title="Принять смену">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    </sidebar-item>
  </sidebar>

  <section class="flex-1">
    <div class="m-3">
      <v-table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Email</th>
            <th>Клуб</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-800 hover:bg-gray-600" v-for="user in usersList" :key="user.id">
            <th>{{ user.username }}</th>
            <td>{{ user.first_name }}</td>
            <td>{{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.current_club_name }}</td>
            <td class="text-right">
              <router-link :to="{name: 'ClientsView', params: {userId: user.id}}">
                <span class="font-medium text-purple-400 hover:underline">Открыть</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </section>
</template>

<script>
import Sidebar from '../components/sidebar/Sidebar.vue'
import SidebarItem from '../components/sidebar/SidebarItem.vue'

import VTable from '../components/VTable.vue'

import { AccountsAPI } from '../api/accounts/index.js'

export default {
  name: 'MainPage',
  data() {
    return {
      usersList: [
        {
          id: Number,
          username: String,
          first_name: String,
          last_name: String,
          email: String,
          current_club_name: String
        }
      ]
    }
  },
  components: {
    VTable,
    Sidebar,
    SidebarItem
  },
  methods: {
    loadUsers() {
      AccountsAPI.loadUsers()
        .then(response => {
          console.log(response.data)
          this.usersList = response.data})
        .catch(error => {
          console.log(error)})
    }
  },
  created() {
    this.loadUsers()
  }
}
</script>

<style scoped>

</style>