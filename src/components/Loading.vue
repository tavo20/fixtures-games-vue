<template>
    <div class="loading"> . . . </div>
</template>


<style scoped>
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        color: #58c3a7;
        font-weight: bold;
        margin: 50px;
        animation-name: rep;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        margin: 100px;
        font-size: 30px;
    }

    @keyframes rep {
        0% {
            transform: translate(-50%, -50%);
        }
        100% {
            transform: translate(-50%, -50%) rotate(180deg);
        }
    }
</style>