<script setup>
import MonitorList from "../Components/Home/MonitorList.vue";
import { Head } from '@inertiajs/vue3'
import { Button } from 'flowbite-vue'
let props = defineProps(['monitors']);
import {Link} from "@inertiajs/vue3";
</script>

<template>
    <Head title="Home" />
    <div class="mt-5">
        <h1 class="text-center text-rose-700 text-large">Monitor List</h1>
    </div>
    <Link :href="route('')">
        <Button class="flex-row mx-4 my-8" gradient="cyan">Add New Monitors</Button>

    </Link>



    <MonitorList class="mt-4" :monitors = "monitors"/>


</template>

<style scoped>

</style>
