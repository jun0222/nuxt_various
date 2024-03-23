<template>
  <button @click="handleClick">クリックしてね</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('ボタンがクリックされました！')
    },
  },
}
</script>
