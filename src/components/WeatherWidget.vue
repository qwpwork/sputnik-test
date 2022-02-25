<template>
  <div class="weather" :class="{darkmode: isDarkModeActive}">
    <p>Текущее время (в часах): {{currentTime}} часов </p>
    <p>Температура воздуха: {{weatherTemp}}</p>
    <p>Соответствующая иконка, приходящая от АПИ: <img :src='weatherIcon'></p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      weatherTemp: '0',
      weatherIcon: '0',
      currentTime: '0',
      isDarkModeActive: false
    }
  },

  mounted() {
    const weahterAPIUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Tomskaya&appid=da5ed797a5045359d8f975c09788caf9&units=metric';
    //expected object with weather data
    axios.get(weahterAPIUrl).then(response => {
      this.weatherTemp = response.data.main.temp;
      //converting icon response to correct url
      this.weatherIcon = 'http://openweathermap.org/img/wn/' + response.data.weather[0].icon +'.png';
    });
    //darkmode activating by v-bind class
    this.currentTime= new Date().getHours();
    this.currentTime < 12 ? this.isDarkModeActive = true : 0;
  }
}
</script>

<style lang="scss" scoped>
.weather {
  margin: 0 40px;
  background: #f2f2f2;
  color: #4a4a4a;
  width: 300px;
  padding: 50px;
  border: 2px solid #4a4a4a;
  border-radius: 5px;
}
.darkmode {
  background: #4a4a4a;
  color: #f2f2f2;
}
</style>