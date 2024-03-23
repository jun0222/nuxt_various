<template>
  <div>
    <input v-model="message" class="input-field" />
    <p>入力されたメッセージ: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
}
</script>

<style>
.input-field {
  background-color: white;
  border: 1px solid #ccc; /* 軽いボーダーを追加して入力欄がより見えやすくなるようにします */
  padding: 8px; /* 入力欄内のテキストと境界の間にスペースを追加します */
}
</style>
