<script setup>

import NavLink from "@/Shared/NavLink.vue";
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
             <NavLink :href="route('users.index')" :active="$page.component === 'Users'">
                 Users
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

     </ul>
 </nav>

</template>

<style scoped>

</style>
