<template>
    <div class="loading">
        <!-- <img src="../assets/icons/app/icono-app.png" alt="">     -->
        ...
    </div>
</template>


<style scoped lang="scss">
    .loading {
        /* position: absolute; */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        color: #58c3a7;
        font-weight: bold;
        margin: 50px;
        animation-name: rep;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        margin: 100px;
        font-size: 30px;
        img {
            width: 50px;
            opacity: 0.5;
        }
    }

    @keyframes rep {
        0% {
            transform: translate(-50%, -50%);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
</style>