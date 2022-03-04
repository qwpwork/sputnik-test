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
      nasaTitle: 'Title placeholder',
      nasaImg: 'image placeholder',
      nasaFact: 'Fact placeholder',
    }
  },

  mounted() { 
    const nasaAPIUrl = 'https://api.nasa.gov/planetary/apod?api_key=8KRBvMKJ7jeLEsPpNb0xmMtNdRVVVPbPffSdtgDK'
    axios.get(nasaAPIUrl).then(response => {
      this.nasaTitle = response.data.title;
      this.nasaImg = response.data.url;
      this.nasaFact = response.data.explanation;
    })
  }
}
</script>

<style lang="scss" scoped>
.nasa {
  width: 400px;
  border: 2px solid #4a4a4a;
  border-radius: 5px;
  padding: 50px;
  &__img {
    max-width: 400px;
  }
}
</style>