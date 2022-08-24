<template>
    <header>

        <figure>
            <img src="../../src/assets/icons/app/logo.png" alt="">
        </figure>
       <h1>Encarar</h1>
    </header>
</template>


<style scoped lang="scss">

    header {
            height: 70px;
            display: flex;
            align-items: center;
            gap: 30px;
            padding: 10px 10px 10px 40px;
            box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
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

</style>