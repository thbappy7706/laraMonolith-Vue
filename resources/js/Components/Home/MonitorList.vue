<script setup>
defineProps(['monitors'])
</script>

<template>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                     Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Url
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>

            </tr>
            </thead>
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700" v-for="monitor in monitors">

                <td class="px-6 py-4">
                 {{monitor.site_name}}
                </td>
                <td class="px-6 py-4">
                    {{monitor.site_url}}
                </td>

                <td class="px-6 py-4">
                    {{monitor.status}}
                </td>

            </tr>

            </tbody>
        </table>
    </div>

</template>



<style scoped>

</style>
