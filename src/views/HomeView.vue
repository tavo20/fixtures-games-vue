<script setup>
import League from './League.vue';
import Information from './Information.vue';
import Games from './Games.vue';
import { onMounted, ref, watch } from 'vue';
import Loading from '../components/Loading.vue';
import { format } from 'date-fns'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

console.log('home.vue', router);
console.log('route', route);

let leagues  = ref(null);
let fixtures  = ref(null);
let loading  = ref(true);
let dateFixtures  = ref(true);
let valueTest  = ref('primero');

const changeLoading = () => {
    loading.value = !loading.value;
    console.log('cambio', loading.value);
}

watch(route, (newVal, oldVal) => {
    console.log('watch router home-----', newVal.params);
    console.log(oldVal.params);


    getFixtures({ date:dateFixtures.value, league: newVal.params.idLeague });
});

onMounted(async () => {
    // document.title = 'Home';
    const respon = await fetch('https://encarar.herokuapp.com/api/league/get/all');
    const leaguesRespon = await  respon.json();
    leagues.value = leaguesRespon;

    dateFixtures.value = format(new Date(), 'yyyy-MM-dd');
    console.log('GET fixtures');
    await getFixtures({ date: dateFixtures.value });


    changeLoading();
});

const getFixtures = async ({ date = "", league = "" }) => {
  // ?email=${email}
  console.log('GET fixtures', date, league);
    let url = `http://localhost:8085/api/fixture/day/${date}`;
    if(league !== "") {
        url = `http://localhost:8085/api/fixture/day/${date}/?league=${league}`;
    }

    const fixturesRes = await fetch(url ); 
    const fixturesRespon = await fixturesRes.json();
    console.log('RESPON BACK', fixturesRespon)
    dateFixtures.value = date;
    fixtures.value = fixturesRespon.fixtures;
}

watch(leagues, (newValue, oldValue) => {
    // console.log('leagues', newValue, oldValue);
});

</script>

<template>
 
  <main v-if="!loading">
    <League  
      :leagues="leagues"
      :valueTest="valueTest"
    >
    </League>
  
    <Games
      :fixtures="fixtures"
      :dateFixtures="dateFixtures"
      @changeDate="getFixtures"
      >
      
    </Games>

    <Information/>

    <div v-if="loading">
      <h1>HIIIIII</h1>
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
