<template>
  <div class="calendar-view">
    <h1 class="calendario">Calendario de Eventos</h1>
    <Calendar />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Calendar from "@/components/Calendar.vue"; // Importa el componente Calendar.vue

export default defineComponent({
  components: {
    Calendar, // Registra el componente Calendar.vue
  },
});
</script>

<style scoped>

.calendario {
  text-align: center;
  font-style: italic;

}

.calendar-view {

}


</style>
