<script setup>
import {ref} from "vue";
const count = ref(0)
let props = defineProps(['monitors']);
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
