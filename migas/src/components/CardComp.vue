

<script >
import { useCounterStore } from '../stores/counter.js';
import { mapState } from 'pinia';
 export default {
    ...mapState(useCounterStore, ["favoritesArray"])

    // productsSection.innerHTML +=
 }


    
</script>
    
<template>
<!-- <div class="container">
    <div class="col-6">
      <img src="${img}" class="rounded float-start" width="310" height="436" alt="Imagen de la receta " >
        <div class="card-body">                   
            <h2 class= " card-text fst-italic ">${id}. ${title}</h2>
            <h3 class="card-text" id="text">${product}</h3>
            <h4 class="card-text blockquote" id="text">${info}</h4>
            <h4 class="card-text blockquote" id="text">${instructions}</h4>
            <a href="${button}" class="btn btn-secondary fst-italic">Ver receta</a>
        </div>
    </div>
</div>     -->



    <div class="container-fluid text-center bg-light z-index: 2; ">
        <div class="row row-cols-1 row-cols-md-3 g-3 bg-light">
            <div class="col">
                <div class="card shadow " style="width: 18rem;">
                <img src="../assets/czekoladowa-szarlotka-2-1140x1710.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Szlokta</h5>
                        <p class="card-text">Tarta de manzana.</p>
                        <a href="#" class="btn btn-primary">Smacznego</a>
                    </div>
                </div>   
            </div>
            <div class="col">
                <div class="card shadow" style="width: 18rem;">
                    <img src="../assets/czekoladowa-szarlotka-2-1140x1710.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Szlokta</h5>
                        <p class="card-text">Tarta de manzana.</p>
                        <a href="#" class="btn btn-primary">Smacznego</a>
                    </div>
                </div>   
            </div>
            <div class="col">
                <div class="card shadow" style="width: 18rem;">
                    <img src="../assets/czekoladowa-szarlotka-2-1140x1710.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Szlokta</h5>
                        <p class="card-text">Tarta de manzana.</p>
                        <a href="#" class="btn btn-primary">Smacznego</a>
                    </div>
                </div>   
            </div>
        </div>    
    </div>

    <!-- <div class="container text-center mt-5">
        <h3 class="display-6">Recetas</h3>
        <div class="row mt-4">
            <div class="col-sm-12 col-md-4 col-lg-4 py-3">
                <div class="card shadow" style="width: 18rem;">
                    <img src="../assets/czekoladowa-szarlotka-2-1140x1710.jpg" alt=""/>
                    <div class="card-body">
                        <h4>Nombre de la receta</h4>
                        <a href="#" class="btn btn-sm btn-primary">Información</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 py-3">
                <div class="card shadow" style="width: 18rem;">
                    <img src="../assets/pierniczki-z-witrazykami-3-555x833.jpg" alt=""/>
                    <div class="card-body">
                        <h4>Nombre de la receta</h4>
                        <a href="#" class="btn btn-sm btn-primary">Información</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-4 col-lg-4 py-3">
                <div class="card shadow" style="width: 18rem;">
                    <img src="../assets/pernik.jpg" alt=""/>
                    <div class="card-body">
                        <h4>Nombre de la receta</h4>
                        <a href="#" class="btn btn-sm btn-primary">Información</a>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

    




   
</template>
    
<style scoped>
.card > figure {
    width: 100%;
    height: 70%;
    overflow: hidden;
}    
.container{
    background: transparent;
}
    
</style>