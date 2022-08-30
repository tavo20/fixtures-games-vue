<template>
    <section>
        <!-- DATE -->
        <div class="container-date">
            <input 
                type="date" 
                id="viewCalendar"
                 name="trip-start"
                min="2022-01-01" max="2022-12-31"
                :value="dateFixtures"
                @change="getFixtures"
                >
                <div class="icon-calendar-container">
                    <div @click="onClickDate"> {{ dateFixtures }} </div>
                    <img @click="onClickDate" class="img-calendar" src="../assets/icons/app/calendar.png" alt="">

                </div>
        </div>

        <div v-if="!withoutFixtures">
            <div class="league-container" v-for="(league, index,) in fixtures" :key="index">
                <transition name="fade">
                    <div>
                        <!-- LEAGUE -->
                        <div class="container-logo-league">
                            <div>
                                <img :src="league.league.logo" alt="logo-league">
                            </div>
                            <h3>{{ league.league.name}} <span>{{ league.league.country}}</span></h3>
                        </div>
                        <!-- GAMES -->
                        <div class="games">
                            <div class="container-game" v-for="fixture in league.fixtures">
    
                            <div class="x-div center" @click="()=> onFavoriteGame(fixture)">
                                <img class="img-only-start" v-if="!fixture.favorite" src="../assets/icons/app/star.png" alt="">
                                <img class="img-fill-star" v-if="fixture.favorite" src="../assets/icons/app/star-fill.png" alt="">
                            </div>
    
                                <div class="team team-home">
                                    <div>{{ fixture.teams.home.name}}</div>
                                    <figure>
                                        <img :src="fixture.teams.home.logo" alt="">
                                    </figure>
                                </div>
                                <div class="hour" v-if="fixture.fixture.status.short !== 'FT'">
                                    {{ fixture.hour }}
                                </div>
    
                                <div v-else class="center">
                                {{ fixture.score.fulltime.home }} - {{ fixture.score.fulltime.away }}
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
                </transition>
            </div>
        </div>
        <div class="without-games" v-else >
            No hay partidos para esta fecha
        </div>
    </section>
</template>

<script  setup>

import {  watch, ref, toRefs, onMounted } from 'vue';

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

console.log(route.params.date);

// watch(route.params, (newVal, oldVal) => {
//     console.log(newVal);
//     console.log(oldVal);
// } );



let withoutFixtures = ref(false);
const props = defineProps(['fixtures', 'dateFixtures']);
const emit = defineEmits(['changeDate']);


let { fixtures, dateFixtures } = toRefs(props);

if(!fixtures.value) {
    console.log('333')
    withoutFixtures.value = true;
}

watch(fixtures, (newValue, oldValue) => {
    console.log(newValue, )
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

const onClickDate = () => {
    const nodeInput = document.getElementById('viewCalendar')
    console.log('nodeInput', nodeInput);
    if(nodeInput) {
        nodeInput.showPicker();
    } 
}

const onFavoriteGame = (fixture) => {
    console.log('onFavoriteGame',);

    fixture.favorite = !fixture.favorite;
    
    // const game = e.target.parentNode.parentNode;
    // game.classList.toggle('favorite');
}

</script>


<style scoped lang="scss">
    section {
        display: flex;
        width: 100%;
        height: auto;
        flex-direction: column;

        .without-games {
            text-align: center;
            color: #58c3a7;
            letter-spacing: 2px;
            margin: 30px 0;
        }

        .container-date {
            display: flex;
            justify-content: flex-end;
            margin: 20px 10px;
            .icon-calendar-container {
                    display: flex;
                    gap: 20px;
                    cursor: pointer;
            }

            input[type="date"] {
                visibility: hidden;
                    // background: no-repeat;
                    // align-content: normal;
                    // outline: none;
                    // border: none;
                    // height: 40px;
                    // color: red;
                    // width: 216px;
                    // text-align: end;
 
            }
            .img-calendar {
                width: 20px;
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
                    grid-template-columns: 20px 1fr 50px 1fr;
                    gap: 10px;
                    margin: 15px 0;
                    .x-div {
                        img {
                            width: 20px;
                            margin: 0 0 0 10px;    

                        }
                        visibility: hidden;
                        .img-fill-star {
                            visibility: visible;
                            
                        }
                    }
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
                    cursor: pointer;
                }
                .container-game:hover .x-div .img-only-start {
                    visibility: visible;
                    position: relative;
                    // animation: test 2s backwards 0.2  fill-mode;
                    animation-name: test;
                    animation-duration: .81s;
                    animation-fill-mode: forwards ;
                    // animation-delay: .5s ;
                }
                
                @keyframes test {
                0%   { left:0px; top:0px; }
                25%  { left:5px; top:0px;}

                100% { left:0px; top:0px;}
                }
                // @keyframes test {
                //     0%   {opacity: 0.2, }
                //     25%  {opacity: 0.4;}
                //     50%  {opacity: 0.7}
                //     100% {opacity: 1; color: red;}
                // }
            }

        }
    }

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>