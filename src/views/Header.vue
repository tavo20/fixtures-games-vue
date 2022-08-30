<template>
    <header>

        <div class="container-logo-app">
            <figure>
                <img src="../../src/assets/icons/app/icono-app.png" alt="">
            </figure>
           <h1>Encarar</h1>
        </div>

        <div class="container-menu">
            <ul>
                   <li>
                        <router-link :to="{ name: 'home' }">
                        Home
                        </router-link>
                    </li>
                   <li>
                       <router-link :to="{ name: 'favorite' }">
                          Favorites
                       </router-link>
                   </li>
                   <li>
                        <router-link to="/about">
                          About us
                       </router-link>
                    </li>
            </ul>
        </div>
       
    </header>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<style scoped lang="scss">

    header {
            height: 70px;
            display: flex;
            align-items: center;
            gap: 30px;
            padding: 10px 10px 10px 40px;
            box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
            justify-content: space-between;
            padding: 0 20px 0 0;
            .container-logo-app {
                display: flex;
                align-items: center;
                gap: 30px;
                margin: 0px 15px;
                figure {
                    img {
                        width: 50px;
                        height: 100%;
                    }
                }
                h1 {
                    color: var(--colorApp);
                    letter-spacing: 5px;
                }
            }

            .container-menu {
                ul {
                        display: flex;
                        list-style: none;
                        gap: 20px;
                    li {

                        a {
                            color: var(--colorApp);
                            font-size: 0.8rem;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            font-weight: bold;
                            text-decoration: none;
                            &:hover {
                                color: var(--colorAppHover);
                            } 
                        }
                    }
                }
            }
    }

</style>