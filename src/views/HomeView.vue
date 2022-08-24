<script setup>
import League from './League.vue';
import Information from './Information.vue';
import Games from './Games.vue';
</script>

<template>
  <main>
    <League/>
  
    <Games/>

    <Information/>

  </main>
</template>

<style scoped lang="scss">

main {
    max-width: 1280px;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  justify-items: center;
}

</style>
