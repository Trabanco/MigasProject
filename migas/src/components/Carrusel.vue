
<script setup>
    import { RouterLink } from 'vue-router';
</script>


<template> 
   <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" style="background-color:#669de4" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" style="background-color:#669de4" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" style="background-color:#669de4" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/slide1.jpg" class="d-block w-100" alt="imgCarrusel1">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-muted">First slide label</h5>
        <p class="text-muted">Makowiec biszkoptowy.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/slide2.jpg" class="d-block w-100" alt="imgCarrusel2">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-muted" >Second slide label</h5>
        <p class="text-muted">Popękane ciasteczka czekoladowe.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/slide3.jpg" class="d-block w-100" alt="imgCarrusel3">
      <div class="carousel-caption d-none d-md-block">
        <h5 class="text-muted">Third slide label</h5>
        <p class="text-muted">Seromak makowiec z serem.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   
</template> 



<style scoped >

  
</style>




<!-- La vista principal= HomeView.vue
Vista de tartas = pag tartas [TartasView.vue]
Vista de galletas = pag galletas [GalletasView.vue]
Vista de bizcochos = pag bizcochos [BizcochosView.vue]
Vista de carritoRecetas = pag carritoRecetas [CarritoRecetasView.vue]
vista de añadirRecetas = pag añadirRecetas(me falta)


Componente vista principal=helloworld(cambiar name del componente)
Componente vista tartas= welcomeitem(cambiar name del componente)
Componente vista galletas= (falta)
Componente vista bizcochos= (falta)
Componente vista carritoRecetas= (falta)
Componente vista añadirRecetas= (comprobar que funciona)


Todo lo que quiero que se vea en todas las pag se carga en AppVue
Si solo tiene que aparecer en la pagina propia se carga en ella directamente
Si quiero cambiar el link(enlace) lo tengo que hacer en el componte que quiero que este(que aparezca) -->


