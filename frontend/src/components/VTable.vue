<template>
  <div class="shadow-md rounded-lg overflow-x-auto">
    <table>
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: 'VTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      rowsPerPage: 10
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.data.length / this.rowsPerPage)
    }
  }
}
</script>

<style>
table {
  @apply w-full text-sm text-left text-gray-400 ;
}

thead {
  @apply text-xs uppercase bg-gray-700 text-gray-400;
}

th {
  @apply py-3 px-6;
}

td {
  @apply py-4 px-6;
}
</style>