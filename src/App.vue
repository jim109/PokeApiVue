<template>
  <nav class="contenedor">
    <router-link to="/">Home</router-link> |
    <router-link :to="{name: 'pokemon-search'}">Search</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
nav {
  padding-top: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: $gris;
    padding: 0 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    &.router-link-exact-active {
      color: $amarillo;
    }
  }
}
</style>
