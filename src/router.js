import {createRouter, createWebHashHistory} from 'vue-router'
import WelcomeView from "@/views/WelcomeView.vue";
import RegisterView from "@/views/RegisterView.vue";
import LoginView from "@/views/LoginView.vue";
import SelectedTutorView from "./views/SelectetTutorView.vue";
import chatView from "@/views/chatView.vue";
import ratingView from "@/views/RatingView.vue";
import ScoreView from "@/views/ScoreView.vue";
import CalendarView from "@/views/CalendarView.vue";
import TutorList from "@/views/TutorListView.vue";
import ChooseScheduleView from "@/views/ChooseScheduleView.vue";


const routes = [
    { path: "/", component: WelcomeView },
    { path: "/register-student", component: RegisterView},
    { path: "/login-student", component: LoginView},
    { path: "/rating", component:ratingView },
    { path: "/selected", component:SelectedTutorView },
    { path: "/chat", component:chatView },
    { path: "/calendar", component: CalendarView},
    { path: "/scoreview", component: ScoreView},
    { path: "/tutorlist", component: TutorList},
    { path: "/choose-schedule/:id", component: ChooseScheduleView}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router