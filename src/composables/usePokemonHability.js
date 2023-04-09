import axios from "axios"
import { ref } from "vue"

const usePokemonHability = ( pokemonId = '1' ) => {

    const pokemonhability = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchHability = async( id ) => {
        if(!id) return 
        isLoading.value = true
        pokemonhability.value = null
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/ability/${ id }`)
            pokemonhability.value = data
            errorMessage.value = null  
        } catch (error) {
            errorMessage.value = 'No se pudo cargar ese Pokemon'
        }
        isLoading.value = false
    }
    searchHability( pokemonId )

    return {
        pokemonhability,
        searchHability,
        
    }
}

export default usePokemonHability