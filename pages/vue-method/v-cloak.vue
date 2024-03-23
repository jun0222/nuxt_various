<template>
  <div v-if="showText">このテキストは3秒後に表示されます</div>
</template>

<script>
export default {
  data() {
    return {
      showText: false, // 初期状態ではテキストを隠す
    }
  },
  mounted() {
    setTimeout(() => {
      this.showText = true // 3秒後にテキストを表示
    }, 3000) // 3000ミリ秒 = 3秒
  },
}
</script>
