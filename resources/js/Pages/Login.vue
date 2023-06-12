
<script setup>
import GuestLayout from "../Components/GuestLayout.vue";
import {Link} from "@inertiajs/vue3";
import {reactive} from "vue";
import { useForm } from '@inertiajs/vue3'
import { useToast } from "vue-toastification";


defineOptions({layout: GuestLayout})

// const form =  reactive({
//     email : '',
//     password : '',
// })


const form = useForm({
    email: null,
    password: null,
    remember: false,
})

const toast = useToast();

function submitLoginForm()
{
    form.post('/auth/login', {
        preserveScroll: true,
        onSuccess: () =>{
            toast.success("You Are Logged In", {
                timeout: 2000
            });
            form.reset('password')
        }
    })
}

function handleInput(event)
{
form.clearErrors(event.target.name)
}
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST" @submit.prevent = "submitLoginForm">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input v-model="form.email" @input="handleInput" id="email" name="email" type="email" autocomplete="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        <div class="text-red-700" v-if="form.errors.email">{{ form.errors.email }}</div>
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input v-model="form.password" @input="handleInput" id="password" name="password" type="password" autocomplete="current-password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        <div class="text-red-700" v-if="form.errors.password">{{ form.errors.password }}</div>
                    </div>
                </div>

                <div>

<!--                    when use reactive-->

<!--                    <Link href="/auth/login" method="post" as="button" type="button"-->
<!--                          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
<!--                       :data="form"  >-->
<!--                        Sign in-->

<!--                    </Link>-->


                    <button class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            type="submit" :disabled="form.processing">Login</button>


<!--                    <Link href="/auth/login" method="post" as="button" type="button"-->
<!--                          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
<!--                          :data="{ email: 'login@gmail.com', password: `1234567` }"-->
<!--                    >-->

<!--                        Sign in-->

<!--                    </Link>-->
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                {{ ' ' }}
                <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p>
        </div>
    </div>
</template>
