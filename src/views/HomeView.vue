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
          <PokemonCard v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon" />
        </div>
      </section> 
    </div>

    <div class="contenedor contenedor-boton">
      <button @click="prevPage" class="boton-verde">&lt;&lt;</button>
      <form @submit.prevent="onSubmit">
        <input type="number" placeholder="Numero del pokemon" v-model="goTo">
      </form>
      <button @click="nextPage" class="boton-verde">&gt;&gt;</button>
    </div>
    
</div>
<Footer />
</template>

<script>
import Footer from '@/components/Footer';
import usePokemonAll from '@/composables/usePokemonAll';
import PokemonCard from '@/components/PokemonCard.vue';
import { ref } from 'vue';

export default {
  components: {
    Footer, PokemonCard
  },
  setup() {
    const { pokemons, isLoading, errorMessage, searchPokemon, nextPage, prevPage, currentPage, totalPage } = usePokemonAll()
    const goTo = ref(currentPage)



    return{
      pokemons, isLoading, errorMessage, searchPokemon, nextPage, prevPage, currentPage, totalPage, goTo,
      onSubmit() { 
        console.log('click');
                searchPokemon(goTo.value)
                
              }
    }
  }

}
</script>
