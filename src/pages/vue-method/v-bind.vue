<template>
  <div :id="dynamicId">ここにテキストを表示</div>
</template>

<script>
export default {
  data() {
    return {
      dynamicId: 'uniqueId123',
    }
  },
}
</script>
