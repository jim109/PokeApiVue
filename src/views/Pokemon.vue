<template >
    <div>
        <h1 v-if="!pokemon && !errorMessage">Buscando ...</h1>
    <h1 v-else-if="errorMessage">{{  errorMessage }}</h1>

    <template v-else>
    <div class="main">
        <div class="title-main">
            <h1 >{{  pokemon.name  }}</h1>  
            <p># {{ pokemon.id }}</p>
        </div>   
        <div class="section-type">
            <section v-for="(type, index) in pokemon.types" :key="index">
            <p class="type">{{ type.type.name }}</p>
        </section>
        </div>      

        <section class="image">
            <img :src="pokemon.sprites.other.home.front_default" :alt="pokemon.id">
            <!--<img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.id">
             <img :src="pokemon.sprites.other.home.front_shiny" :alt="pokemon.id"> -->
        </section>
    </div>
        <span>Height: {{ pokemon.height }}</span>
        <span>Weight: {{ pokemon.weight }}</span>

            <section>
                <h2>Stats</h2>
                <div v-for="(stat, index) in pokemon.stats" :key="index">
                    <p>{{ stat.stat.name }}</p>
                    <p>{{ stat.base_stat }}</p>
                </div>
            </section>
            <section>
                <h2>Habilities</h2>
                <div v-for="(ability, index) in pokemon.abilities" :key="index">
                    <span>{{ ability.ability.name }}</span>
                </div>
            </section>
        <!-- <div>
            <section>
                <h2>Moves</h2>
                <div v-for="(move, index) in pokemon.moves" :key="index">
                    <p>{{ move.move.name }}</p>
                </div>
            </section>
            <div>
                <button @click="currentPage--" :disabled="currentPage === 0">Anterior</button>
                <button @click="currentPage++" :disabled="(currentPage + 1) * 10 >= pokemon.stats.length">Siguiente</button>
            </div>
        </div> -->
        
        <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
    </template>
    </div>
</template>

<script setup>

import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composables/usePokemon'
import { watch } from 'vue'
 
        const { params } = useRoute()
        const { pokemon, isLoading, errorMessage, searchPokemon } =  usePokemon( params.id)

        watch(
            () => params.id, 
            () => searchPokemon(params.id),
        ) 
        onBeforeRouteLeave( () => {
            
            const answer = window.confirm('Esta seguro que desea salir')

            if(!answer) return false //false, bloquea la salida
        })

</script>
<style scoped>
    h1 {
        margin: 0;
    }
    section  {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    span, p {
        padding-left: 12px;
        margin: 0;
    }
    .main {
        background-color: rgb(138, 194, 138);
        color: white;
        
    }
    .image img {
        width: 250px;
    }
    .title-main {
        font-size: 2em;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .title-main p {
        display: flex;
        align-items: center;
    }
    .section-type {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .type {
        padding: 6px 12px;
        border-radius: 14%;
        background-color: rgb(181, 204, 181) ;
    }

</style>

