<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.text }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: 'アイテム1' },
        { id: 2, text: 'アイテム2' },
        { id: 3, text: 'アイテム3' },
      ],
    }
  },
}
</script>
