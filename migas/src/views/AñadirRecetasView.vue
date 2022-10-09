<script setup>

import { RouterView } from 'vue-router';
import CardComp from '../components/CardComp.vue';


</script>

<template>
  <body>
    <div class="container ">
      <!-- <div class="añadirRecetas"> -->
        <h2>Pagina para añadir RECETAS 📖 </h2>
        <h2>Aqui es donde vamos a poder añadir nuevas recetas </h2>
        <CardComp />
      <!-- </div>/ -->
      <RouterView /> 
    </div>  
  </body>
</template>

<style scoped>
.container{
  background: none;
}

</style>