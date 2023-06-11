<template>
    <NavBar/>
    <slot/>
    <Footer/>

</template>

<script setup>

import Footer from "./Footer.vue";
import {Link} from "@inertiajs/vue3";
import NavBar from "./NavBar.vue";
</script>

<style scoped>

</style>
