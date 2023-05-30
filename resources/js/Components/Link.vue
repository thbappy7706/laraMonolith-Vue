<script setup>
import {Link} from "@inertiajs/vue3";
defineProps(['name','component','href'])
</script>

<template>
<Link :class="$page.component === component && 'active'" preserve-scroll :href="href">{{name}}</Link>
</template>
