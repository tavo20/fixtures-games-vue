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

        <div class="league-container" v-if="!withoutFixtures">
            <Game 
             v-for="(league, index,) in fixtures" 
             :key="index"
             :league="league"
             >
            </Game>
        </div>
        
        <div class="without-games" v-else >
            No hay partidos para esta fecha
        </div>
    </section>
</template>

<script  setup>

import {  watch, ref, toRefs, onMounted } from 'vue';
import Game from '../components/Game.vue';

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();


// watch(route.params, (newVal, oldVal) => {
// } );

let withoutFixtures = ref(false);
const props = defineProps(['fixtures', 'dateFixtures']);
const emit = defineEmits(['changeDate']);


let { fixtures, dateFixtures } = toRefs(props);

if(!fixtures.value) {
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

const onClickDate = () => {
    const nodeInput = document.getElementById('viewCalendar')
    if(nodeInput) {
        nodeInput.showPicker();
    } 
}

const onFavoriteGame = (fixture) => {

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