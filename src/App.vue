<template>
  <nav class="contenedor">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'pokemon-search'}">Buscar</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
