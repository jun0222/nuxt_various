<template>
  <div>
    <TodoComposition />
  </div>
</template>

<script>
// FIXME: 絶対パスでインポートする
import TodoComposition from '../../../components/TodoComposition/TodoComposition.vue'

export default {
  components: {
    TodoComposition,
  },
}
</script>
