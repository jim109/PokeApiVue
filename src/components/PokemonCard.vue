<template>
    <div class="card"  :class="pokemon.type[0]">
    <h3 class="card-title">{{ pokemon.name }}</h3>
        <div class="informacion">
            <div class="type" :class="pokemon.type[0]" >
                <template v-for="(type, index) in pokemon.type" :key="index">
                    <span >{{ type }}</span>
                </template>
            </div>
            <div class="image-container">
                <img :src="pokemon.image = null ? pokemon.imageDefault : pokemon.image" class="pokemon-image" :alt="pokemon.name" />
                <img :src="pokemon.imageBack = null ? pokemon.imageDefault : pokemon.imageBack" class="pokemon-image-shiny" :alt="`Shiny ${pokemon.name}`" />
            </div>
        </div>
    </div>
</template>

<script>

export default {
props: {
    pokemon: {}
},
setup() {

}
}
</script>

<style>

</style>