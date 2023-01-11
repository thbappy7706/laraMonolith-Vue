<script setup>
import {ref,watch} from "vue";
import { Table } from "@protonemedia/inertiajs-tables-laravel-query-builder";

let props = defineProps({
    customers: Object,

});



</script>
<template>
    <Head title="Customers"/>
    <div class="flex justify-between mb-6">
        <h1 class="text-3xl">Customers</h1>
           </div>

    <div class="flex flex-col mt-7">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <h3 class="text-2xl text-center">Laravel Customers</h3>
                    <Table :resource="customers" />
                </div>
            </div>
        </div>
    </div>

<!--    <Pagination :links="users.links" class="mt-6"/>-->
</template>

<style scoped>

</style>
