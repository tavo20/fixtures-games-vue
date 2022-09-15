<template>
    <section>
        <div class="container-general">
            <h2>Leagues</h2>
     
            <!-- <h1>{{ leagues }}</h1> -->
            <template class="container-leagues" v-if="leagues && leagues.length">
                <LeagueCo 
                     v-for="league in leagues" 
                    :is="league"
                     :key="league._id" 
                     @click="()=> handleViewLeague(league)"
                     :league="league"
                ></LeagueCo>
            </template>
        </div>
    </section>
</template> 

<style scoped lang="scss">
    section {
        display: flex;
        width: 100%;
        height: auto;
        // background: red;
        flex-direction: column;
        .container-general {
                margin: 20px 10px;
                background: rgb(60 55 55 / 10%);
                padding: 10px;
            h2 {
                color: #58c3a7;
                letter-spacing: 5px;
                margin: 10px 0 30px 0px;
            }
            .container-leagues {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 30px;
                flex-direction: column;

            }

        }
    }
</style>

<script setup>

import { toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { defineAsyncComponent } from 'vue';
const LeagueCo = defineAsyncComponent(() => import('../components/LeagueCo.vue'));
// import LeagueCo from '../components/LeagueCo.vue';
const router = useRouter();
const route = useRoute();

let props = defineProps({
    leagues: {
        type: Array,
        default: []
    },
});

let { leagues } = toRefs(props);

function handleViewLeague(league) {
    router.push({
        path: `/home/league/${league.league}`,
        // params: {
        //     idLeague: league._id
        // }
    });

}

</script>