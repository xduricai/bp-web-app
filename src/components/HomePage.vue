<template>
  <div class="title-wrapper">
    <h1>Home Page</h1>
  </div>
  <div>
    <button @click="redirect('/new')">New Subscription</button>
    <button @click="redirect('/all')">My Subscription</button>
  </div>
</template>
  
<script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  const redirect = (path: string) => { router.push({ path }) };

</script>
  
<style scoped>

</style>