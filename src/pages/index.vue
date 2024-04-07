<template>
  <div>
    <h1>ページ一覧</h1>
    <ul>
      <li v-for="page in pages" :key="page">
        <nuxt-link :to="`/${page}`">{{ page }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // staticディレクトリ内のpages.jsonを読み込む
    const pages = await $axios.$get('/pages.json')
    return { pages }
  },
}
</script>
