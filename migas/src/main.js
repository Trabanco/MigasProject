import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// import RecibeRecetasList from './components/RecibeRecetasList.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// const requestURL = "../src/assets/products.json/producMigas.json"
// console.log("hola");
// async function fetchProductsJSON() {
//   const response = await fetch(requestURL);
//   const products = await response.json();
//   return products;
// }

// fetchProductsJSON().then((products) => {
//   for (let index = 0; index < productMigas.length; index++) {
//     const productsSection = document.getElementById("productsSection");
//     let id = product.productMigas[index].id;
//     let nombre = product.productMigas[index].nombre;
//     let category = product.productMigas[index].category;
//     let img = product.productMigas[index].image;
//     let info = product.productMigas[index].info;
//     let instructions = product.productMigas[index].instructions;   
//     let button = movies.peliculas[index].info;
//   }
// };
