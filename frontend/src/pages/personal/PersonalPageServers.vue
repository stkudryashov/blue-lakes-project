<template>
  <div class="m-3">
    <v-table>
      <thead>
      <tr>
        <th>Клуб</th>
        <th>Статус</th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-gray-800 hover:bg-gray-600" v-for="club in clubsList" :key="club.id">
        <td>
          <a :href="club.site_link" target="_blank">{{ `${club.city}, ${club.street}` }}</a>
        </td>
        <td>
          <svg v-if="club.status === 'loaded'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else-if="club.status === 'error'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-600 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import VTable from '../../components/VTable.vue'

import { AccountsAPI } from '../../api/accounts/index.js'


export default {
  name: 'PersonalPageServers',
  components: {
    VTable
  },
  data() {
    return {
      clubsList: []
    }
  },
  methods: {
    loadClubs() {
      AccountsAPI.loadClubs()
        .then(response => {
          console.log(response.data)
          this.clubsList = response.data
          this.loadStatus(response.data.map(x => x.site_link))})
        .catch(error => {
          console.log(error)})
    },
    loadStatus(links) {
      links.forEach(link => {
        console.log(link)

        AccountsAPI.loadClubStatus(link)
          .then(response => {
            console.log(response.data)
            const club = Array.from(this.clubsList).find(club => club.site_link === link)

            if (response.data.status === 200) {
              club.status = 'loaded'
            }
            else {
              club.status = 'error'
            }
          })
          .catch(error => {
            console.log(error)})
      })
    }
  },
  created() {
    this.loadClubs()
  }
}
</script>

<style scoped>

</style>