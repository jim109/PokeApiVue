<template>
<div class="home">
    <h1 class="bienvenidos">Welcome to the world of Pokemon!</h1>s
    <div class="contenedor">
      <div class="loader contenedor" v-if="isLoading">
          <img src="../assets/imgLoader.png" alt="Cargando">
      </div>
      <div v-if="errorMessage" class="contenedor">
        <h3>{{ errorMessage }}</h3>
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
    <Footer />
</div>

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
<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 58px);
}
.loader {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-top-color: #3498db;
  animation: spin 1s infinite linear;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>
