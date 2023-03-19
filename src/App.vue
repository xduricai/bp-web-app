<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';
  export default class App extends Vue {}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    width: 800px;
    margin: 24px auto;
  }

  .title-wrapper {
    display: flex;
    justify-content: center;
  }
</style>
