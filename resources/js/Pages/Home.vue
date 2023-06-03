<script setup>
import {ref} from "vue";
import Footer from "../Components/Footer.vue";
import Layout from "../Components/Layout.vue";
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


</template>

<style scoped>

</style>
