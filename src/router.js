import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import ChooseScheduleView from "@/views/ChooseScheduleView.vue";


const routes = [
    { path: "/", component: WelcomeView },
    { path: "/register-student", component: RegisterView},
    { path: "/login-student", component: LoginView},
    { path: "/choose-schedule/:id", component: ChooseScheduleView}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router