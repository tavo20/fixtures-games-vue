<script setup>
import HomeView from './views/HomeView.vue';
import Header from './views/Header.vue';
import { RouterView } from 'vue-router'


</script>

<template>
  <Header></Header>
  <!-- <HomeView/> -->

    <router-view>

    </router-view>

</template>

<style scoped>

</style>
