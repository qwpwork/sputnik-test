<template>
  <div class="first-ticket">
    <div class="weather" :class="{darkmode: isDarkModeActive}">
      <p>Текущее время (в часах): {{currentTime}} часов </p>
      <p>Температура воздуха: {{weatherTemp}}</p>
      <p>Соответствующая иконка, приходящая от АПИ: {{weatherIcon}}</p>
    </div>
    <div class="nasa">
      <p> {{nasaTitle}} </p>
      <img class="nasa__img" :src='nasaImg'>
      <p> {{nasaFact}} </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      weatherTemp: '',
      weatherIcon: '',
      nasaTitle: '',
      nasaImg: '',
      nasaFact: '',
      currentTime: '',
      isDarkModeActive: false
    }
  },
  mounted() {
    
    const weahterAPIUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Tomskaya&appid=da5ed797a5045359d8f975c09788caf9&units=metric';
    const nasaAPIUrl = 'https://api.nasa.gov/planetary/apod?api_key=8KRBvMKJ7jeLEsPpNb0xmMtNdRVVVPbPffSdtgDK'

    //awaits an obj with weather data
    axios.get(weahterAPIUrl).then(response => {
      this.weatherTemp = response.data.main.temp;
      this.weatherIcon = response.data.weather[0].icon;
    });

    axios.get(nasaAPIUrl).then(response => {
      this.nasaTitle = response.data.title;
      this.nasaImg = response.data.hdurl;
      this.nasaFact = response.data.explanation;
      console.log(response.data.hdurl)
    })

    //darkmode activating by v-bind class
    this.currentTime= new Date().getHours();
    this.currentTime < 12 ? this.isDarkModeActive = true : 0;
    
  }

  
}
</script>

<style lang="scss" scoped>
  .first-ticket {
    display: flex;
    font-family: sans-serif;
  }
  .weather {
    background: #f2f2f2;
    color: #4a4a4a;
    width: 300px;
    padding: 50px;
  }
  .darkmode {
    background: #4a4a4a;
    color: #f2f2f2;
  }

  .nasa {
    width: 400px;
    &__img {
      max-width: 400px;
    }
  }
</style>