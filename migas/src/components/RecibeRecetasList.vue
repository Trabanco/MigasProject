<script setup>
import { useCounterStore } from "../stores/counter.js";

import productFilterData from '../js/productFilterData.js'
import { mapActions } from "pinia";

export default {
  data() {
    return {
      productData: []
    }
  },
  components: { productFilterData },
  methods: {
    ...mapActions(useCounterStore, ['addFavorite']),
  },
  async created() {
    const handler = new productFilterData();
    const data = await handler.getData();
    this.productlData = data;
  }

};


</script>

<template>
  <div>
    <h1>Product List</h1>
  </div>

 
  <main>
    <div class="horintotalScroll">
      <div class="card" v-for="data in productData" :key="data.index">
        <img :src="data.sm" :alt="data.name" :title="data.name" :id="data.id">
        <div class="color">
          <p>{{ data.name }}</p>
          <span @click="addFavorite(data)">
          </span>
        </div>
      </div>
    </div>
  </main>



</template>

<style scoped>
.horintotalScroll {
  display: grid;
  grid-template-rows: 250px 250px;
  grid-auto-flow: column;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 10px;
  row-gap: 10px;
}

.horintotalScroll::-webkit-scrollbar {
  width: 12px;
}

.horintotalScroll::-webkit-scrollbar-track {
  background: transparent;
}

.horintotalScroll::-webkit-scrollbar-thumb {
  background-color: var(--color-iconHouese);
  border-radius: 5px;
}

.card {
  position: relative;
  width: 9vw;
  height: 13.5vw;
  max-width: 160px;
  max-height: 240px;
  min-width: 80px;
  min-height: 120px;
}
</style>
