<template>
<div class="contenedor">
    <h1>Bienvenidos al mundo pokemon</h1>
    <div class="container">

      <h2>Pokémon List</h2>
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

              <div>
                <img :src="pokemon.image" alt="pokemon" />
              </div>
            </div>
            
          </div>
        </div>

      </section> 

    </div>

    <div class="contenedor">
      <h5>{{ currentPage }}</h5>
      <button @click="prevPage" class="boton-verde">Atras</button>
      <button @click="nextPage" class="boton-verde">Siguiente</button>
    </div>

</div>
</template>

<script>
import usePokemonAll from '@/composables/usePokemonAll';
export default {

  setup() {
    const { pokemons, isLoading, errorMessage, searchPokemon, nextPage, prevPage, currentPage, totalPage } = usePokemonAll()
   
    return{
      pokemons, isLoading, errorMessage, searchPokemon, nextPage, prevPage, currentPage, totalPage
    }
  }

}
</script>