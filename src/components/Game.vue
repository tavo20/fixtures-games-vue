<template>
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
</template>

<script setup>

const props = defineProps({
    league: {
        type: Object,
        default: {}
    },
});

const onFavoriteGame = (fixture) => {
    fixture.favorite = !fixture.favorite;
}


</script>

<style lang="scss">
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

</style>