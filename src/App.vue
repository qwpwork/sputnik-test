<template>
  <div id="app">
    <SiteHat/>
    <router-view/>
  </div>
</template>

<script>
import SiteHat from './components/SiteHat.vue'
export default {
  components: {
    SiteHat
  },
  name: 'App'
}
</script>

<style lang="scss" scoped>
* {
  font-family: sans-serif;
}
</style>