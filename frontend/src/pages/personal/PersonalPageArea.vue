<template>
  <!-- Карточка пользователя CRM -->
  <div class="flex">
    <div class="m-3 flex-1">
      <v-table>
        <thead>
          <tr>
            <th colspan="5">Моя карточка</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-800 hover:bg-gray-600">
            <th>Имя пользователя</th>
            <td>{{ user.username }}</td>
          </tr>
          <tr class="bg-gray-800 hover:bg-gray-600">
            <th>Имя и фамилия</th>
            <td>{{ `${user.first_name} ${user.last_name}` }}</td>
          </tr>
          <tr class="bg-gray-800 hover:bg-gray-600">
            <th>Клуб</th>
            <td>{{ `${club.city}, ${club.street}` }}</td>
          </tr>
          <tr class="bg-gray-800 hover:bg-gray-600">
            <th>Email</th>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <!-- Список прав доступа -->
    <div class="m-3 flex-1">
      <v-table>
        <thead>
          <tr>
            <th colspan="5">{{ user.type }}: доступные права</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-gray-800 hover:bg-gray-600" v-for="permission in user.permissions" :key="permission.title">
            <td>{{ permission.title }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
import VTable from '../../components/VTable.vue'


export default {
  name: 'PersonalPageArea',
  components: {
    VTable
  },
  computed: {
    user() {
      return this.$store.getters['AuthModule/getUserInfo']
    },
    club() {
      return this.$store.getters['AuthModule/getUserClub']
    }
  },
}
</script>

<style scoped>

</style>