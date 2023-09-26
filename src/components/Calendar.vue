<script>
import { defineComponent, ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import Calendar from 'primevue/calendar';

export default defineComponent({
  components: {
    FullCalendar,
    Calendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
      calendarEvents: [],
      datetime12h: null, // Agrega esta línea para el calendario de formato 12h
    };
  },
  methods: {
    async fetchEventsFromAPI() {
      try {
        const response = await axios.get("http://localhost:3000/eventosCalendario");
        this.calendarEvents = response.data;
      } catch (error) {
        console.error("Error al obtener eventos:", error);
      }
    },
  },
  mounted() {
    this.fetchEventsFromAPI();
  },
});
</script>
<template>
  <div>
    <!-- Componente de primevue/calendar -->
    <div>
      <label for="calendar-12h">Selecciona una fecha y hora:</label>
      <Calendar
          id="calendar-12h"
          v-model="datetime12h"
          showTime
          hourFormat="12"
      />
    </div>

    <!-- Componente de FullCalendar -->
    <div class="calendar">
      <FullCalendar
          :options="calendarOptions"
          :events="calendarEvents"
      />
    </div>
  </div>
</template>

<style scoped>
.calendar {

}
</style>
