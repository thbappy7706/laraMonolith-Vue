<template>
    <header>
        My App
        <Link href="/about" name="About" component ="About">About</Link>
        <Link href="/test" name="Test" component ="Test">Test</Link>
        <Link href="/login" name="Login" component ="Login">Login</Link>
    </header>

    <slot/>


    <Footer/>

</template>

<script setup>

import Footer from "./Footer.vue";
import {Link} from "@inertiajs/vue3";
</script>

<style scoped>

</style>
