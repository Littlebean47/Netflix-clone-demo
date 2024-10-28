<script setup>
import Banner from './components/Banner.vue';
import Navbar from './components/Navbar.vue'
import Rows from './components/Rows.vue';
import requests from '@/utils/request';

</script>

<template>
  <!-- Navbar -->
  <Navbar />
  <!-- Banner -->
  <Banner :fetchUrl="requests.upComing"/>
  <!-- Rows -->
  <Rows genre="New to Netflx" :fetchUrl="requests.newToNetflix" />
  <Rows genre="Top Rated" :fetchUrl="requests.topRated" />
  <Rows genre="Trending" :fetchUrl="requests.fetchTrending" />
  <Rows genre="Coming Soon" :fetchUrl="requests.upComing" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
