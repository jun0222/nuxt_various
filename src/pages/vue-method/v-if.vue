<template>
  <div>
    <div v-if="type === 'A'">タイプAです</div>
    <div v-else-if="type === 'B'">タイプBです</div>
    <div v-else>その他のタイプ</div>

    <!-- タイプを切り替えるボタン -->
    <button @click="type = 'A'">タイプAを表示</button>
    <button @click="type = 'B'">タイプBを表示</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'A',
    }
  },
}
</script>
