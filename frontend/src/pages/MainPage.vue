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
    <div class="m-3 overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Имя
          </th>
          <th scope="col" class="py-3 px-6">
            Username
          </th>
          <th scope="col" class="py-3 px-6">
            Номер телефона
          </th>
          <th scope="col" class="py-3 px-6">
            Тариф
          </th>
          <th scope="col" class="py-3 px-6">
            <span class="sr-only">Личное дело</span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
          <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">
            Александр
          </th>
          <td class="py-4 px-6">
            Kudryashov
          </td>
          <td class="py-4 px-6">
            8 (999) 999-99-99
          </td>
          <td class="py-4 px-6">
            Platinum
          </td>
          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-500 hover:underline">Открыть</a>
          </td>
        </tr>
        <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
          <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">
            Илья
          </th>
          <td class="py-4 px-6">
            Next_Target
          </td>
          <td class="py-4 px-6">
            8 (999) 999-99-99
          </td>
          <td class="py-4 px-6">
            Gold
          </td>
          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-500 hover:underline">Открыть</a>
          </td>
        </tr>
        <tr class="bg-gray-800 hover:bg-gray-600">
          <th scope="row" class="py-4 px-6 font-medium whitespace-nowrap text-white">
            Анастасия
          </th>
          <td class="py-4 px-6">
            Sia
          </td>
          <td class="py-4 px-6">
            8 (999) 999-99-99
          </td>
          <td class="py-4 px-6">
            Gold
          </td>
          <td class="py-4 px-6 text-right">
            <a href="#" class="font-medium text-blue-500 hover:underline">Открыть</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import SidebarItem from '../components/SidebarItem.vue'

export default {
  name: 'MainPage',
  components: {
    Sidebar,
    SidebarItem
  }
}
</script>

<style scoped>

</style>