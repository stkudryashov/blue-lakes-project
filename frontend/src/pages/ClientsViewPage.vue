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
          <th>Телефон</th>
          <td>{{ user.phone_number }}</td>
        </tr>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th>Клуб</th>
          <td>{{ user.club_name }}</td>
        </tr>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th>Дата регистрации</th>
          <td>{{ user.date_of_register }}</td>
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

import { ClientbaseAPI } from '../api/clientbase/index.js'


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
        id: '',
        username: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        club_name: '',
        date_of_register: '',
      }
    }
  },
  methods: {
    getClient() {
      const clientId = this.$route.params.userId

      ClientbaseAPI.getClient(clientId)
        .then(response => {
          console.log(response.data)
          this.user = response.data})
        .catch(error => {
          console.log(error)})
    }
  },
  created() {
    this.getClient()
  }
}
</script>

<style scoped>

</style>