<script setup>
import Pagination from "@/Shared/Pagination.vue";
import { Inertia } from '@inertiajs/inertia';
import {ref,watch} from "vue";
import {debounce} from "lodash";

let props = defineProps({
    users: Object,
    filters: Object,
    can : Object
});
let search = ref(props.filters.search);

// watch(search,(value) => {
//     // console.log('changed ' + value)
//     Inertia.get('/users',{search:value},{preserveState:true,replace:true});
// });

// with debounce
watch(search, debounce(function (value) {
    Inertia.get('/users', { search: value }, { preserveState: true, replace: true });
}, 300));

</script>
<template>
    <Head title="Users"/>
    <div class="flex justify-between mb-6">
        <h1 class="text-3xl">Users</h1>
        <input v-model="search" class="border px-2 rounded-lg" type="text" placeholder="Search..." />
        <Link v-if="can.createUser" :href="route('users.create')" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create User</Link>
    </div>

    <div class="flex flex-col mt-7">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="user in users.data" :key="user.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">
                                            {{ user.id }}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div>
                                        <div class="text-sm font-medium text-gray-900">
                                            {{ user.name }}
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td v-if="user.edit"  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Link :href="`/users/${user.id}/edit`" class="text-indigo-600 hover:text-indigo-900"> Edit</Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <Pagination :links="users.links" class="mt-6"/>
</template>

<style scoped>

</style>
