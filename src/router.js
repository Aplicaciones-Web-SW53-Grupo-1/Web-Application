import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import RegisterView from "@/views/RegisterView.vue";


const routes = [
    { path: "/", component: WelcomeView },
    { path: "/register-student", component: RegisterView}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router