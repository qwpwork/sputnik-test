<template>
  <div class="nasa">
    <h3> {{nasaTitle}} </h3>
    <img class="nasa__img" :src='nasaImg'>
    <p> {{nasaFact}} </p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      nasaTitle: '',
      nasaImg: '',
      nasaFact: '',
    }
  },
  mounted() { 
    const nasaAPIUrl = 'https://api.nasa.gov/planetary/apod?api_key=8KRBvMKJ7jeLEsPpNb0xmMtNdRVVVPbPffSdtgDK'

    axios.get(nasaAPIUrl).then(response => {
      this.nasaTitle = response.data.title;
      this.nasaImg = response.data.hdurl;
      this.nasaFact = response.data.explanation;
    })
  }
}
</script>

<style lang="scss" scoped>
  .nasa {
    width: 400px;
    &__img {
      max-width: 400px;
    }
  }
</style>