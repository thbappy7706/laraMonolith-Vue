<script setup>
import {ref} from "vue";
import MonitorList from "../Components/Home/MonitorList.vue";

const count = ref(0)
let props = defineProps(['monitors']);
</script>

<template>
    <div class="mt-5">
        <h1 class="text-center text-rose-700 text-large">Monitor List</h1>

    </div>

    <MonitorList :monitors = "monitors"/>


</template>

<style scoped>

</style>
