

<script setup>
import { useCounterStore } from '../stores/counter.js';
import { mapState } from 'pinia';
 export default {
    ...mapState(useCounterStore, ["favoritesArray"])
 }


    
</script>
    
<template>
    <div class="container-fluid text-center z-index: 2; ">
        <div class="row row-cols-1 row-cols-md-3 g-3">
            <div class="col">
                <div class="card" style="width: 22rem;">
                <img src="../assets/czekoladowa-szarlotka-2-1140x1710.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Szlokta</h5>
                        <p class="card-text">Tarta de manzana.</p>
                        <a href="#" class="btn btn-primary">Smacznego</a>
                    </div>
                </div>   
            </div>
            <div class="col">
                <div class="card" style="width: 22rem;">
                <img src="../assets/czekoladowa-szarlotka-2-1140x1710.jpg" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Szlokta</h5>
                        <p class="card-text">Tarta de manzana.</p>
                        <a href="#" class="btn btn-primary">Smacznego</a>
                    </div>
                </div>   
            </div>
            <div class="col">
                <div class="card" style="width: 22rem;">
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






   
</template>
    
<style scoped>
      
    
</style>