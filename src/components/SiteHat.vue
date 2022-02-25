<template>
  <header>
    <nav>
      <router-link class="nav-link" to="/weather">Weather</router-link>
      <router-link class="nav-link" to="/gallery">Gallery</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  font-family: sans-serif;
  padding: 10px;
  margin-bottom: 10px;
  background: #f2f2f2;
  border-bottom: 2px solid #4a4a4a;
  nav {

    .nav-link {
      padding: 5px;
    }
  }
}
</style>