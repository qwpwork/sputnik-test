<template>
  <div class="wrapper"> 
    <input 
      class="searchInput"
      type="text"
      placeholder="Search"
      :submit='inputSubmit'
      v-on:keyup.enter="inputSubmit"
      v-model="inputVal"
    />
    
    <p class="preloader" :class="{preloader_visible: isLoading}">Loading</p>

    <ul class="gallery">
      <li class="gallery__card" v-for="photo in photoCollection" :key="photo.id">
        
        <img
          class="gallery__photo"
          :class='{gallery__photo_loading: isLoading}'
          :src='photo.urls.small'
          :alt='photo.alt_description'
        >

        <p class="gallery__title">{{photo.alt_description}}</p>
        <p class="gallery__author">{{photo.user.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      photoCollection: {},
      inputVal: '',
      isPlaceHolderVisible: true,
      isLoading: true
    }
  },

  mounted() {
    //setting data before submit
    this.photoCollection = [
      {
        id: 0,
        urls: {
          small: 'https://via.placeholder.com/200',
        },
        alt_description: 'description placeholder',
        user: {
          name: 'Author description'
        }
      }
    ]
    this.isLoading = false
  },
  
  methods: {
    //on input submit we getting an obj with data and removing placeholder card
    inputSubmit: function(event) {
      this.isLoading = true
      //API Key
      let apiURL = 'https://api.unsplash.com/photos/?client_id=H3-Toi2JaQdXrMs06_edRxtsyvXweUvf2JxS2nY3ISc';
      //Adding query
      apiURL = apiURL + '&query=' + this.inputVal;
      axios.get(apiURL).then(response => {
        this.photoCollection = response.data;
      })
      this.isLoading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.searchInput {
  display: block;
  width: 800px;
  margin: 20px auto;
  border: 0;
  background: transparent;
  border-bottom: 2px solid #4a4a4a;
  color: #4a4a4a;
  outline: none;
  font-size: 22px;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: sans-serif;
  margin-right: 40px;
  &__card {
    list-style: none;
    max-width: 200px;
    padding: 20px 50px 20px 50px;
    margin-bottom: 20px;
    background: #f2f2f2;
    color: #4a4a4a;
    border: 1px solid #bbb;
    border-radius: 5px;
    margin-right: 20px;
    margin-left: 0;
  }
  &__photo {
    width: 200px;
    &_loading {
      display: none;
    }
  }
  &__title {
    font-size: 18px;
    font-weight: 700;
  }
  .preloader {
    display: none;
    &_visible {
      display: block;
    }
  }
}
</style>