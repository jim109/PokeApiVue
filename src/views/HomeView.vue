<template>
<div class="contenedor">
    <h1 class="bienvenidos">Welcome to the world of Pokemon!</h1>
    <div class="container">
      <div v-if="isLoading">
        Loading...
      </div>

      <div v-if="errorMessage">
        {{ errorMessage }}
      </div>

      <section class="seccion contenedor">

        <div v-if="pokemons" class="main-card">
          <div class="card" v-for="(pokemon, index) in pokemons" :key="index" :class="pokemon.type[0]">
            <h3 class="card-title">{{ pokemon.name }}</h3>
            <div class="informacion">

              <div class="type" :class="pokemon.type[0]" >
                <template v-for="(type, index) in pokemon.type" :key="index">
                <span >{{ type }}</span>
                
              </template>
              <!-- <template v-for="(ability, index) in pokemon.ability" :key="index">
                <span>{{ ability }}</span>
              </template> -->
              </div>

              <div class="image-container">
                <img :src="pokemon.image" class="pokemon-image" alt="pokemon" />
                <img :src="pokemon.imageBack" class="pokemon-image-shiny" alt="pokemon shiny" />
              </div>
            </div>
            
          </div>
        </div>

      </section> 

    </div>

    <div class="contenedor contenedor-boton">
      <button @click="prevPage" class="boton-verde">Atras</button>
      <form @submit.prevent="onSubmit">
        <input 
            type="number"
            placeholder="Numero del pokemon"
            v-model="goTo"
        >
      </form>
      <button @click="nextPage" class="boton-verde">Siguiente</button>
    </div>

</div>
<footer class="footer">
      <div class="contenedor contenedor-footer">
        <!-- <p class="copyright">&copy; Jimmy Osma - All rights reserved 2023</p> -->
        <p class="atribucion">Data provided by <a href="https://pokeapi.co/" target="_blank" rel="noopener">PokeAPI</a></p>
        <ul class="social-icons">
          <li>Follow me :</li>
          <li><a href="https://twitter.com/jimwy109" target="_blank"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/jimmyosma/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
          <li><a href="https://github.com/jim109" target="_blank"><i class="fab fa-github"></i></a></li>
          <li><a href="mailto:me@jimmyosma.co" target="_blank"><i class="far fa-envelope"></i></a></li>
        </ul>
      </div>
</footer>
</template>

<script>
import usePokemonAll from '@/composables/usePokemonAll';
import { ref } from 'vue';

export default {

  setup() {
    const { pokemons, isLoading, errorMessage, searchPokemon, nextPage, prevPage, currentPage, totalPage } = usePokemonAll()
    const goTo = ref(currentPage)
    return{
      pokemons, isLoading, errorMessage, searchPokemon, nextPage, prevPage, currentPage, totalPage, goTo,
      onSubmit() { 
                searchPokemon(goTo.value)
              }
    }
  }

}
</script>
