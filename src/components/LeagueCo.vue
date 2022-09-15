<template>
    <div class="league-item"  >
        <div class="league-item-image">
            <img :src="league.image" alt="">
        </div>
        <div class="league-item-info">
            <h3>{{ league.nameLeague}}</h3>
            <p> {{ league.country }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

let props = defineProps({
    league: {
        type: Object,
        default: {}
    },
});

</script>

<style lang="scss">
    .league-item {
            display: grid;
            width: 100%;
            grid-template-columns: 70px 1fr;
            padding: 4px 0;
            border-bottom: 1px solid rgb(24 24 24 / 60%);
            margin: 0 0 5px 0;

        .league-item-image {
                display: flex;
                // justify-content: center;
                align-items: center;
            img {
                    width: 30px;
                    height: 30px;
                    object-fit: contain;
            }
        }
        .league-item-info {
            h3 {
                font-size: 13px;
                font-weight: bold;
            }
            p {
                font-size: 11px;
            }
        }
    }
    .league-item:hover {
        background: var(--colorGray);
        cursor: pointer;
        border-radius: 3px;
    } 
</style>