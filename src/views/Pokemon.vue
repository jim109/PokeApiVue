<template >
    <!-- <div class="vh100">
        <h1 v-if="!pokemon && !errorMessage">Buscando ...</h1>
        <h1 v-else-if="errorMessage">{{  errorMessage }}</h1>
    </div> -->
    <div v-if="pokemon" class="main">
        
            <div class="image contenedor" >
                <div class="round">
                    <img :src="pokemon.sprites.other['official-artwork'].front_default" :alt="pokemon.id">
                </div>
            </div>
            <div class="title-main contenedor">
                <h1 class="uppercase">{{  pokemon.name  }}</h1>  
                <p>#0{{ pokemon.id }}</p>
            </div>   
            <div class="section-type contenedor">
                <h2>Type:</h2>
                <div class="main-type" v-for="(type, index) in pokemon.types" :key="index">
                    <p>{{ type.type.name }}</p>
                </div>
                <h2>Height:</h2>
                <p> {{ pokemon.height }}</p>
                <h2>Weight:</h2>
                <p>{{ pokemon.weight }}</p>
            </div>      
<section class="stats contenedor">
    <section>
            <h2>Stats</h2>
            <div class="contenedor" v-for="(stat, index) in pokemon.stats" :key="index">
                <div class="main-base_stats">
                    <h4 class="capitalize">{{ stat.stat.name }}</h4>
                    <p>{{ stat.base_stat }} - 255</p>
                </div>
            <div class="barra-progreso">
            <div class="barra-fondo">
                <div class="barra-valor" :style="{ width: Math.round(stat.base_stat / 2.55) + '%' }"></div>
            </div> 
        </div>
        </div>
    </section>
    <section class="ability contenedor">
        <h2>Habilities</h2>
        <div v-for="(ability, index) in pokemon.abilities" :key="index">
            <p>{{ ability.ability.name }}</p>
        </div>
    </section>
</section>
        <!-- <div>
            <button @click="currentPage--" :disabled="currentPage === 0">Anterior</button>
            <button @click="currentPage++" :disabled="(currentPage + 1) * 10 >= pokemon.stats.length">Siguiente</button>
        </div> -->
            
        <router-link :to="{name: 'pokemon-search'}">Regresar</router-link>
        <Footer />
    </div>

    
</template>

<script setup>

import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composables/usePokemon'
import { watch } from 'vue'
import Footer from '@/components/Footer.vue'
 
    const { params } = useRoute()
    const { pokemon, isLoading, errorMessage, searchPokemon } =  usePokemon( params.id)

    watch(
        () => params.id, 
        () => searchPokemon(params.id),
        { immediate: true }
    ) 
    onBeforeRouteLeave( () => {
        
        const answer = window.confirm('Esta seguro que desea salir')

        if(!answer) return false //false, bloquea la salida
        })

</script>
<style lang="scss" scoped>

//Barras Stats
.barra-progreso {
    height: 10px;
    width: 100%;
    margin-top: 5px;
}

.barra-fondo {
    background-color: #eee;
    height: 100%;
    width: 100%;
}

.barra-valor {
    height: 100%;
    background-image: linear-gradient(to right, #ff2e63, #ff7e5f, #ffb700);
    animation: 1s ease-out forwards;
}

@keyframes animacion-barra {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

.stat-vida .barra-valor {
    background-image: linear-gradient(to right, #ff2e63, #ff7e5f, #ffb700);
}

.stat-ataque .barra-valor {
    background-image: linear-gradient(to right, #ff6a00, #ee0979, #9d1a99);
}

.stat-defensa .barra-valor {
    background-image: linear-gradient(to right, #008aff, #00c6ff, #0072ff);
}

.stat-velocidad .barra-valor {
    background-image: linear-gradient(to right, #00b09b, #96c93d, #f5d548);
}

.stat-especial .barra-valor {
    background-image: linear-gradient(to right, #4b1248, #7d0457, #a70060);
    // background-image: url('icono-especial.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 80%;
    animation: animacion-barra-especial 1s ease-out forwards;
}

@keyframes animacion-barra-especial {
    from {
        width: 0;
        background-size: 0%;
    }
    to {
        width: 100%;
        background-size: 80%;
    }
}


</style>


