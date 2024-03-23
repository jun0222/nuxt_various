<template>
  <div>
    <h1>Welcome to our website!</h1>
    <p>
      <router-link to="/about">router link: Go to About page</router-link>
      <nuxt-link to="/about">nuxt link: Go to About page</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
