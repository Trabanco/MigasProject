
<script setup>
 import { RouterLink } from 'vue-router';
</script>


<template> 
    <nav class="navbar navbar-expand-md navbar-light bg-dark">
      <div class="container-fluid">
          <a href="#" class="navbar-brand-expand-md">
            <img alt="Migas logo" class="logo" src="../assets/logoMigasSinFondo.png" width="100" height="100" />
            <RouterLink to="/"> "MIGAS" </RouterLink>
            <span class="text-warning"> 😜 Por cual me decido...... ✨</span>
          </a>
          <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#menu" 
            aria-controls="navbarNavDropdown" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="menu">
          <ul class="navbar-nav flex-row flex-wrap text-light">
            <li class="nav-item col-6 col-md-auto p-3"><a class="nav-link" href="#Bizcochos"> 🧁
              <RouterLink to="/bizcochos">pagina bizcochos 🧁 </RouterLink></a>   
            </li>
            <li class="nav-item col-6 col-md-auto p-3"><a class="nav-link" href="#Tartas"> 🍰
              <RouterLink to="/tartas">pagina tartas 🍰 </RouterLink></a>    
            </li>
            <li class="nav-item col-6 col-md-auto p-3"><a class="nav-link" href="#Galletas"> 🍪 
              <RouterLink to="/galletas">pagina galletas 🍪  </RouterLink>
            </a></li>
            <li class="nav-item col-6 col-md-auto p-3"><a class="nav-link" href="#"> 📚
              <RouterLink to="/carritoRecetas">pagina para VER EL CARRITO DE compras o RECETAS FAVORITAS 📚</RouterLink></a>
            </li>
            <li class="nav-item col-6 col-md-auto p-3"><a class="nav-link" href="#"> 📖
              <RouterLink to="/añadirRecetas">pagina  para añadir Recetas O finalizar la compra 📖</RouterLink></a>    
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template> 



<style >
    nav {
  background-color:transparent;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin: 0;
  padding:0.2rem 1rem;
 /* display: flex; */
}
nav.navbar{
 background: transparent;
}




  
</style>