import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";


const routes = [
    { path: "/", component: WelcomeView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router