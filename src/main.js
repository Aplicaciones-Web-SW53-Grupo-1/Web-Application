import PrimeVue from "primevue/config"
import "primevue/resources/primevue.min.css"; //core css
import "primevue/resources/themes/lara-light-blue/theme.css";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import router from "@/router";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);

app.component("pv-button", Button);
app.component("pv-card", Card);
app.component("pv-input-text", InputText);
app.component("pv-calendar", Calendar);

app.mount("#app");
