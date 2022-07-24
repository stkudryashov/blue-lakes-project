<template>
  <div class="grid place-items-center h-screen">
    <h1 class="text-6xl">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Hello World'
    }
  }
}
</script>

<style scoped>

</style>
