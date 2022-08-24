<script setup>
import League from './League.vue';
import Information from './Information.vue';
import Games from './Games.vue';
import { onMounted, ref, watch } from 'vue';
import Loading from '../components/Loading.vue';
import { compareAsc, format } from 'date-fns'

let leagues  = ref(null);
let fixtures  = ref(null);
let loading  = ref(true);
let dateFixtures  = ref(true);
let valueTest  = ref('primero');

const changeLoading = () => {
    loading.value = !loading.value;
}

onMounted(async () => {

    // document.title = 'Home';
    const respon = await fetch('https://encarar.herokuapp.com/api/league/get/all');
    const leaguesRespon = await  respon.json();
    leagues.value = leaguesRespon;

    console.log('date fns', format(new Date(), 'yyyy-MM-dd'));
    dateFixtures.value = format(new Date(), 'yyyy-MM-dd');

    await getFixtures({ date: '2022-08-27'})


    changeLoading();
    valueTest.value ="segundo";
});

const getFixtures = async ({ date = "" }) => {
  console.log('home', date);

    const fixturesRes = await fetch(`http://localhost:8085/api/fixture/day/${date}`);
    const fixturesRespon = await fixturesRes.json();
    dateFixtures.value = date;
    fixtures.value = fixturesRespon.fixtures;
}



watch(leagues, (newValue, oldValue) => {
    console.log('leagues', newValue, oldValue);
} );
watch(valueTest, (newValue, oldValue) => {
    console.log('valueTest', newValue, oldValue);
} );
</script>

<template>
  <main v-if="!loading">
    <League  
      :leagues="leagues"
      :valueTest="valueTest"
    > </League>
  
    <Games
      :fixtures="fixtures"
      :dateFixtures="dateFixtures"
      @changeDate="getFixtures"

      >
      
    </Games>


    <Information/>
  <div v-if="loading">
    <Loading/>
  </div >

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
