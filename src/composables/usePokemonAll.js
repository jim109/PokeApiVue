import axios from "axios"
import { ref, onMounted } from "vue"

const usePokemonAll = () => {

    const pokemons = ref([])
    const isLoading = ref(false)
    const errorMessage = ref(null)
    const currentPage = ref(1)
    const totalPages = ref(0)

    const searchPokemon = async( page) => {
        isLoading.value = true
        pokemons.value = []
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${(page - 1) * 12}`)
            const pokemonData = await Promise.all(
                data.results.map(async(result) => {
                    const pokemonInfo = await axios.get(result.url)
                    return {
                        name: pokemonInfo.data.name,
                        image: pokemonInfo.data.sprites.other['official-artwork'].front_default,
                        imageBack: pokemonInfo.data.sprites.other['official-artwork'].front_shiny,
                        type: pokemonInfo.data.types.map((type) => type.type.name),
                        ability: pokemonInfo.data.abilities.map((ability) => ability.ability.name),
                        statsname: pokemonInfo.data.stats.map((stats) => stats.stat.name),
                        stats: pokemonInfo.data.stats.map((stats) => stats.base_stat),
                    }
                })
            )
            pokemons.value = pokemonData
            errorMessage.value = null  
        } catch (error) {
            errorMessage.value = 'No se pudo cargar ese Pokemon'
        }
        isLoading.value = false
    }

    const nextPage = () => {
        currentPage.value++;
        searchPokemon(currentPage.value);
      };
  
      const prevPage = () => {
        currentPage.value--;
        searchPokemon(currentPage.value);
      };
  
      onMounted(() => {
        searchPokemon(currentPage.value);
      });


    return {
        pokemons,
        isLoading,
        errorMessage,
        searchPokemon,
        nextPage,
        prevPage,
        currentPage,
        totalPages
    }
}

export default usePokemonAll