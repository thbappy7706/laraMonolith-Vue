<script setup>
import {ref} from "vue";
import Footer from "./Footer.vue";
const count = ref(0)
</script>

<template>
<div>
    <div>
        <h1>Hello</h1>
    </div>

    <button @click="$event=>count++">+</button>
    {{count}}
    <button @click="$event=>count--">-</button>
</div>

    <Footer/>
</template>

<style scoped>

</style>
