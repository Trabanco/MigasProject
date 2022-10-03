<script setup>
import { RouterView } from 'vue-router'

import AppFooter from './components/AppFooter.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
 <div class="container"> 
  <Navbar />

 




  <RouterView />
  <AppFooter />
  </div>
</template>

<style scoped>

</style>
