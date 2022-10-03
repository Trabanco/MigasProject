<script setup>
import { mapState, mapActions } from "pinia"
import { useCounterStore } from "../stores/counter.js";
import CardComp from "./CardComp.vue";
import CorazonFavorite from "./CorazonFavorite.vue";
import CardComp from "./CardComp.vue";


export default {
  computed: {
    ...mapState(useCounterStore, ["favoritesArray"])
  },
  data() {
    return {

    }
  },
  components: { useCounterStore},
  methods:{
    ...mapActions(useCounterStore,['addFavorite']),
  }
}

</script>

<template>
 <header>
    <h1>Hoy me apetece</h1>
  </header>
  <CardComp />
  <main>
    <div class="favoriteSection">
      <div class="card" v-for="data in favoritesArray" :key="data.index">
        <img :src="data.sm" :alt="data.name" :title="data.name" :id="data.id">
        <div class="color">
          <p>{{ data.name }}</p>
          <span @click="addFavorite(data)">
            <CorazonFavorite />
          </span>
        </div>
      </div>
    </div>
  </main>
</template>
