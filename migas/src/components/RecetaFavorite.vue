<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
  <div class="card">
   <p>{{ favoritesArray[0].name }}</p>
      <div class="product">
        <img :src="favoritesArray[0].sm" :alt="favoritesArray[0].nombre" :title="favoritesArray[0].nombre"
          :id="favoritesArray[0].id" />
      </div>
      <div class="category">Category : {{ favoritesArray[0].category }}</div>
      <div class="nombre">Nombre : {{ favoritesArray[0].nombre }}</div>
      <div class="info">Info : {{ favoritesArray[0].info }}</div>
      <div class="instructions">Instructions : {{ favoritesArray[0].instructions }}</div>
  </div>
   
  <div>
    <button type="button"class="btn button--edit m-1 text-center">
      <h3>Editar {{id}}</h3>
    </button>
    </RouterLink>
  </div>
</template>