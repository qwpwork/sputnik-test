<template>
  <div class="first-ticket">
    <WeatherWidget />
    <NasaWidget />
  </div>
</template>
<script>

import WeatherWidget from './WeatherWidget.vue'
import NasaWidget from './NasaWidget.vue'

export default {
  components: {
    NasaWidget,
    WeatherWidget
  }
}
</script>

<style lang="scss" scoped>
  .first-ticket {
    display: flex;
    font-family: sans-serif;
  }
</style>