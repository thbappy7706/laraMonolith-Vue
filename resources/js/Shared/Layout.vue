<script setup>
import Nav from "@/Shared/Nav.vue";
import {computed,reactive} from "vue";
import { usePage } from '@inertiajs/inertia-vue3'
defineProps({

});
const userName = computed(() => {
    return usePage().props.value.auth.userName
})

const hello = computed(()=>{
})

const product = reactive({
    items: ['Macbook', 'IPhone13', 'Playstation5'],
})

const hasItems = computed(() => {
    return product.items.length > 0 ? 'Yes' : 'No'
})

</script>

<template>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
       <div class="flex items-center">
           <h1 class="font-bold text-lg">My App</h1>
<!--           <p class="text-sm ml-4"> Hello, {{$page.props.auth.userName}}</p>-->
           <p class="text-sm ml-4"> Hello, {{userName}}</p>
       </div>
            <Nav/>
        </header>
    </section>

    <section class="p-6">
<div class="max-w-3xl mx-auto">
    <slot/>
</div>
    </section>
</template>

<style scoped>

</style>
