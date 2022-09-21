<script setup>
import League from './League.vue';
import Information from './Information.vue';
import Games from './Games.vue';
import { onMounted, ref, watch } from 'vue';
import Loading from '../components/Loading.vue';
import { format } from 'date-fns'
import { useRouter, useRoute } from 'vue-router';
import { getFixturesApi } from '../api/fixtures'

const router = useRouter();
const route = useRoute();

let leagues  = ref(null);
let fixtures  = ref(null);
let loading  = ref(true);
let dateFixtures  = ref(true);

const changeLoading = () => {
    loading.value = !loading.value;
}


watch(route, async (newVal, oldVal) => {
    changeLoading();
    await getFixtures({ date:dateFixtures.value, league: newVal.params.idLeague });
    changeLoading();
});

onMounted(async () => {
    // document.title = 'Home';
    const respon = await fetch('https://encarar.herokuapp.com/api/league/get/all');
    const leaguesRespon = await  respon.json();
    leagues.value = leaguesRespon;

    dateFixtures.value = format(new Date(), 'yyyy-MM-dd');
    let league = route.params.idLeague || false;

    await getFixtures({ date: dateFixtures.value, league });


    setTimeout(() => {
      changeLoading();
    }, 1000)
});

const  getFixturesEmitDay = async ({date})  => {
    let league = route.params.idLeague || false;
    await getFixtures({ date, league });


}

/**
 * Get fixtures by date and league.
 * @param {*} date Date I want to get the fixtures.
 * @param {*} league League I want to get the fixtures.
 */
const getFixtures = async ({ date = "", league = "" }) => {
  try {

      const fixturesRespon = await getFixturesApi({ date, league });

      dateFixtures.value = date;
      fixtures.value = fixturesRespon.fixtures;

  } catch(err) {
    console.error('Error get fixtures', err);
  }
}

watch(leagues, (newValue, oldValue) => {
});
</script>

<template>
 
  <div class="main-app-container">
    <League  
      :leagues="leagues"
    >
    </League>
  
    <Games v-if="!loading"
      :fixtures="fixtures"
      :dateFixtures="dateFixtures"
      @changeDate="getFixturesEmitDay"
      >
    </Games>

    <div v-if="loading">
      <Loading/>
    </div >

    <Information/>

  </div>


</template>

<style scoped lang="scss">

.main-app-container {
  max-width: 1280px;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  justify-items: center;
}

</style>
