<template>
    <section>
        <div class="container-general">
            <h2>Leagues</h2>
    
            <div class="container-leagues">
                <div class="league-item"  v-for="league in leagues" :key="league._id" @click="()=> handleViewLeague(league)">
                    <div class="league-item-image">
                        <img :src="league.image" alt="">
                    </div>
                    <div class="league-item-info">
                        <h3>{{ league.nameLeague}}</h3>
                        <p> {{ league.country }}</p>
                    </div>
                </div>

            </div>
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
                .league-item {
                        display: grid;
                        width: 100%;
                        grid-template-columns: 70px 1fr;
                        padding: 4px 0;
                    .league-item-image {
                            // display: flex;
                            // justify-content: center;
                            // align-items: center;
                        img {
                                width: 45px;
                                height: 45px;
                                object-fit: contain;
                        }
                    }
                    .league-item-info {
                        h3 {
                            font-size: 16px;
                            font-weight: bold;
                        }
                        p {
                            font-size: 13px;
                        }
                    }
                }
                .league-item:hover {
                    background: var(--colorGray);
                    cursor: pointer;
                    border-radius: 3px;
                } 
            }

        }
    }
</style>

<script setup>

import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

let props = defineProps({
    leagues: {
        type: Array,
        default: []
    },
    valueTest: {
        type: String,
        default: 'true'
    }
});

let { leagues, valueTest } = (props);

function handleViewLeague(league) {
    console.log('league', league, league.league);
    router.push({
        path: `/home/league/${league.league}`,
        // params: {
        //     idLeague: league._id
        // }
    });

}

</script>