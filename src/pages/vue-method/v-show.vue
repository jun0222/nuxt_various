<template>
  <div>
    <button @click="toggleVisibility">表示/非表示を切り替え</button>
    <div v-show="isVisible">これは表示/非表示切り替え可能なテキストです。</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
  },
}
</script>
