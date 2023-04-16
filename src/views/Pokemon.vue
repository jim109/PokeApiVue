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
        
    <div class="main-type">
    <h2>Type</h2>
        <div class="types-container">
            <div v-for="(type, index) in pokemon.types" :key="index" class="type">
                <p>{{ type.type.name }}</p>
            </div>
        </div>
    ß</div>
        <div class="main-type">
            <h2>Height</h2>
            <div class="type-height">
                <p> {{ pokemon.height }}</p>
            </div>
        </div>
        <div class="main-type">
            <h2>Weight</h2>
            <div class="type-weight">
                <p>{{ pokemon.weight }}</p>
            </div>
            
        </div>
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
    <section class="contenedor">
        <h2>Habilities</h2>
        <div class="ability">
            <div v-for="(ability, index) in pokemon.abilities" :key="index">
            <p>{{ ability.ability.name }}</p>
        </div>
        </div>
    </section>
</section>
        <!-- <div>
            <button @click="currentPage--" :disabled="currentPage === 0">Anterior</button>
            <button @click="currentPage++" :disabled="(currentPage + 1) * 10 >= pokemon.stats.length">Siguiente</button>
        </div> -->
            
        <div class="contenedor">
            <router-link class="boton-regresar" :to="{name: 'pokemon-search'}" >Regresar</router-link>
        </div>
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
.round img:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.boton-regresar {
    display: inline-block;
    background-color: #4CAF50;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    border: none;
    transition: background-color 0.3s ease-in-out;
    margin: 10px 0;
  }

  .boton-regresar:hover {
    background-color: #3E8E41;
  }

</style>


