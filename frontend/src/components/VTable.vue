<template>

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

<style scoped>

</style>