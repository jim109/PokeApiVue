<template>
<div class="contenedor search">
    <h1>Search your Pokemon for Id</h1>
    <form @submit.prevent="onSubmit">
      <input 
          type="number"
          placeholder="Numero del pokemon"
          v-model="pokemonId"
          ref="txtSearchId"
      >
      <span>Click enter to search</span>
    </form>
    
</div>
<Footer />
  </template>
  
  <script>
  import { ref, onActivated } from 'vue'
  import { useRouter } from 'vue-router'
  import Footer from '@/components/Footer'

  export default {
    components: {
        Footer
    },  
      setup() {
  
          const router = useRouter()
  
          const pokemonId = ref(1)
          const txtSearchId = ref()
  
          onActivated(() => {
              txtSearchId.value.select() 
          })
  
          return { 
              pokemonId,
              txtSearchId,
              onSubmit: () => {
                  router.push({ name: 'pokemon-id', params: {id: pokemonId.value}})
              }
          }
  
      }
  
  }
  </script>
  
  