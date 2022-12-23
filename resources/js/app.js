import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue';
import {createInertiaApp,Link} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import Layout from "@/Shared/Layout.vue";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),


    //persistent layout
    resolve: (name) => {
        const page = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue"));
        page.then((module) => {
            module.default.layout = module.default.layout || Layout;
            // if (name.startsWith('auth.')) module.layout = SimpleLayout;
            // if (name.startsWith('user.')) module.layout = [DefaultLayout, UserLayout]
        });
        return page;
    },
    setup({el, app, props, plugin}) {
        return createApp({render: () => h(app, props)})
            .use(plugin)
            .component("Link",Link)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },

});

InertiaProgress.init({color: 'green', showSpinner: false,  delay: 250,});
