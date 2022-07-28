<template>
  <section class="flex-1">
    <div class="m-3">
      <v-table>
        <thead>
        <tr>
          <th colspan="5">Личное дело</th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th>Username</th>
          <td>{{ user.username }}</td>
        </tr>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th>Имя</th>
          <td>{{ user.first_name }}</td>
        </tr>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th>Фамилия</th>
          <td>{{ user.last_name }}</td>
        </tr>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th>Email</th>
          <td>{{ user.email }}</td>
        </tr>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th>Клуб</th>
          <td>{{ user.current_club_name }}</td>
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

import { AccountsAPI } from '../api/accountsAPI/index.js'

export default {
  name: 'ClientsViewPage',
  components: {
    VTable,
    Sidebar,
    SidebarItem
  },
  data() {
    return {
      user: {
        id: Number,
        username: String,
        first_name: String,
        last_name: String,
        email: String,
        current_club_name: String
      }
    }
  },
  methods: {
    getUser() {
      AccountsAPI.getUser(this.$route.params.userId)
        .then(response => {
          console.log(response.data)
          this.user = response.data})
        .catch(error => {
          console.log(error)})
    }
  },
  created() {
    this.getUser()
  }
}
</script>

<style scoped>

</style>