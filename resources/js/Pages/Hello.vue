<script setup>

defineProps({
    name: String,
    profession: String,
    skills: Array,
});
</script>

<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">

        <!-- This is an example component -->
        <div class="max-w-2xl mx-auto">

            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
                </a>
                <div class="p-5">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Hello  {{name}}</h5>
                    <p class="text-center font-normal text-gray-700 mb-3 dark:text-gray-400">We Detect that your are a {{profession}}.</p>
                    <p class="text-center rounded-lg font-normal bg-emerald-700 text-white font-bold mb-3 dark:text-gray-400">Your Skills are</p>
                    <div class="inline-flex space-x-2" v-for="skill in skills">
                        <span class="text-xs inline-block mr-1 py-1 px-2.5 leading-none text-center whitespace-nowrap font-bold bg-purple-600 text-white rounded-full">{{skill}}</span>
                    </div>

                </div>

        </div>
        </div>
    </div>

</template>
