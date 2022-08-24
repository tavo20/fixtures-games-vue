<template>
    <section>
        <!-- <div class="date"> {{ dateFixtures }}</div> -->
        <div class="container-date">
            <input type="date" id="start" name="trip-start"
                min="2022-01-01" max="2022-12-31"
                :value="dateFixtures"
                @change="getFixtures"
                >
        </div>
        <div v-if="!withoutFixtures">
            <div class="league-container" v-for="(league, index,) in fixtures" :key="index">
                <div class="container-logo-league">
                    <div>
                        <img :src="league.league.logo" alt="logo-league">
                    </div>
                    <h3>{{ league.league.name}} <span>{{ league.league.country}}</span></h3>
                </div>
                <div class="games">
                    <div class="container-game" v-for="fixture in league.fixtures">
                        <div class="team team-home">
                            <div>{{ fixture.teams.home.name}}</div>
                            <figure>
                                <img :src="fixture.teams.home.logo" alt="">
                            </figure>
                        </div>
                        <div class="hour">
                            {{ fixture.hour }}
                        </div>
                        <div class="team team-away">
                            <figure>
                                <img :src="fixture.teams.away.logo" alt="">
                            </figure>
                            <div>{{ fixture.teams.away.name}}</div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        <div v-else>
            No hay partidos para esta fecha
        </div>
    </section>
</template>

<script  setup>

import {  watch, ref, toRefs, defineEmits } from 'vue';

let withoutFixtures = ref(false);
const props = defineProps(['fixtures', 'dateFixtures']);
const emit = defineEmits(['changeDate']);


let { fixtures, dateFixtures } = toRefs(props);

console.log('fixtures', fixtures.value);
if(!fixtures) {
    withoutFixtures.value = true;
}


watch(fixtures, (newValue, oldValue) => {
    if(!newValue) {
        withoutFixtures.value = true;
        return;
    }

    withoutFixtures.value = false;

} );

const getFixtures = async (e) => {
    const date = e.target.value;
    emit('changeDate', { date });
}

</script>


<style scoped lang="scss">
    section {
        display: flex;
        width: 100%;
        height: auto;
        flex-direction: column;

        .container-date {
            text-align: end;
            margin: 10px;

            input[type="date"] {
                    // background: no-repeat;
                    // align-content: normal;
                    // outline: none;
                    // border: none;
                    // height: 40px;
                    // color: red;
                    // width: 216px;
                    // text-align: end;
 
            }

        }

        input[type="date"]::-webkit-calendar-picker-indicator {
                               ::-webkit-datetime-edit { padding: 1em; }
                    ::-webkit-datetime-edit-fields-wrapper { background: silver; }
                    ::-webkit-datetime-edit-text { color: red; padding: 0 0.3em; }
                    ::-webkit-datetime-edit-month-field { color: blue; }
                    ::-webkit-datetime-edit-day-field { color: green; }
                    ::-webkit-datetime-edit-year-field { color: purple; }
                    ::-webkit-inner-spin-button { display: none; }
                    ::-webkit-calendar-picker-indicator { background: orange; }

        }
        .league-container {
            margin: 20px 10px;
            background: rgb(60 55 55 / 10%);
            padding: 10px;
            .container-logo-league {
                display: flex;
                align-items: center;
                img {
                    width: 60px;
                    height: 60px;
                    object-fit: contain;
                }
                h3 {
                    color: #58c3a7;
                    letter-spacing: 5px;
                    display: flex;
                    flex-direction: column;
                    span {
                        font-size: 10px;
                        letter-spacing: 1px;
                        color: gray;
                    }
                }

            }
            .games {
                .container-game {
                    display: grid;
                    grid-template-columns: 1fr 50px 1fr;
                    gap: 10px;
                        margin: 15px 0;
                    figure {
                        margin: 0;
                        img {
                            width: 30px;
                        }
                    }
                    .team {
                        display: flex;
                        gap: 20px;
                        align-items: center;

                    }
                    .team-home {
                        justify-content: end;

                    }
                    .team-away {
                        justify-content: start;

                    }
                    .hour {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 11px;
                            color: #58c3a7;
                    }
                }

                .container-game:nth-child(even) {
                    background: rgb(60 55 55 / 10%);
                }
                .container-game:hover {
                    background: rgb(60 55 55 / 10%);
                }
            }

        }
    }
</style>