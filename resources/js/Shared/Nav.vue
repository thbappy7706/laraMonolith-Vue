<script setup>

import {computed} from "vue";

const isLoggedIn = computed(() => {
    return usePage().props.value.auth.isLogIn
})

import NavLink from "@/Shared/NavLink.vue";
import {usePage} from "@inertiajs/inertia-vue3";
</script>

<template>
 <nav>
     <ul class="flex ml-12 space-x-6">
         <li>
             <NavLink :href="route('home')" :active="$page.component === 'Home'">
                 Home
             </NavLink>
         </li>

         <li>
             <NavLink :href="route('users.index')" :active="$page.component === 'Users/Index'">
                 Users
             </NavLink>
         </li>


                <li>
                 <NavLink :href="route('customers.index')" :active="$page.component === 'Customers/Index'">
                 Customers
             </NavLink>
         </li>

         <li>
             <NavLink :href="route('settings')" :active="$page.component === 'Settings'">
                 Settings
             </NavLink>
         </li>

         <li>
             <NavLink :href="route('welcome')" :active="$page.component === 'Welcome'">
                 Landing
             </NavLink>
         </li>

         <li v-if="isLoggedIn">
             <NavLink :href="route('logout')"  method="post" as="button">
                 Logout
             </NavLink>
         </li>

     </ul>
 </nav>

</template>

<style scoped>

</style>
