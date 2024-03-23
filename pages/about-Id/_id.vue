<template>
  <div class="page">
    <h1>This is the page for ID: {{ id }}</h1>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      id: params.id,
    }
  },
  data() {
    return {
      id: null,
    }
  },
}
</script>

<style scoped>
.page {
  text-align: center;
}
</style>
