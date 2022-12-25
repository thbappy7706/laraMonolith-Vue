<script setup>
import { useForm } from "@inertiajs/inertia-vue3"
import {ref} from "vue";
let form = useForm({
    name: '',
    email: '',
    phone: '',
    password: '',
});
// let processing = ref(false);

const submit = () => {
    // processing.value = true;
    form.post(route("users.store"));
};


</script>

<template>
    <Head title="Create User" />

    <h1 class="text-3xl">Create New User</h1>

    <form @submit.prevent="submit" class="mt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
                <label class="text-gray-700" for="username">Name</label>
                <input  v-model="form.name" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text">
                <div v-if="form.errors.name" v-text="form.errors.name" class="text-red-500 text-xs mt-1"></div>
            </div>

            <div>
                <label class="text-gray-700" for="emailAddress">Email Address</label>
                <input v-model="form.email" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="email">
                <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-xs mt-1"></div>

            </div>

            <div>
                <label class="text-gray-700" for="phone">Phone</label>
                <input  v-model="form.phone" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text">
                <div v-if="form.errors.phone" v-text="form.errors.phone" class="text-red-500 text-xs mt-1"></div>
            </div>

            <div>
                <label class="text-gray-700" for="password">Password</label>
                <input v-model="form.password" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password">
                <div v-if="form.errors.password" v-text="form.errors.password" class="text-red-500 text-xs mt-1"></div>
            </div>


        </div>

        <div class="flex justify-center mt-4">
            <button type="submit" :disabled="form.processing" class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Submit</button>
        </div>
    </form>

</template>

<style scoped>

</style>
