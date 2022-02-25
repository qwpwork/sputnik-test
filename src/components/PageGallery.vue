<template>
  <div class="wrapper"> 
    <input class="searchInput" type="text" placeholder="Search" :submit='inputSubmit' v-on:keyup.enter="inputSubmit"/>
    <ul class="gallery">
      <li class="gallery__card" v-if='isPlaceHolderVisible'>
        <img src='https://via.placeholder.com/200' v-if='isPlaceHolderVisible'> 
        <p class="gallery__title">Title_PlaceHolder</p>
        <p class="gallery__author">Author_PlaceHolder</p>
      </li>
      <li class="gallery__card" v-for="photo in photoCollection" :key="photo.id">
        <img class="gallery__photo" :src='photo.links.download' :alt='photo.alt_description'>
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
      isPlaceHolderVisible: true
    }
  },
  methods: {
    inputSubmit: function(event) {
      let apiURL = 'https://api.unsplash.com/photos/?client_id=H3-Toi2JaQdXrMs06_edRxtsyvXweUvf2JxS2nY3ISc'
      axios.get(apiURL).then(response => {
        this.photoCollection = response.data;
        this.isPlaceHolderVisible = false;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.searchInput {
  display: block;
  width: 800px;
  margin: auto;
  border: 0;
  background: transparent;
  border-bottom: 2px solid #4a4a4a;
  color: #4a4a4a;
  outline: none;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: sans-serif;
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
  }
  &__title {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>