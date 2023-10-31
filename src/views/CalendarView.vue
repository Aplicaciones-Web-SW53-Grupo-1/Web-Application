<template>
  <div>
    <div class="event-btn">
      <input v-model="event.title" placeholder="Event Title"/>
      <pv-input-text type="datetime-local" v-model="event.start" />
      <pv-button @click="addEvent">Add Event</pv-button>
    </div>

    <FullCalendar
        :options="calendarOptions"
        @eventClick="handleEventClick"
    />
  </div>
</template>

<style scoped>

.event-btn
{
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
}

.event-btn input
{
  margin-left: 10px;
  margin-right: 10px;
}

</style>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        height: '650px',
        events: []
      },
      event: {
        title: '',
        start: ''
      }
    }
  },
  methods: {
    addEvent() {

      this.calendarOptions.events.push({
        title: this.event.title,
        start: this.event.start
      });

      this.event.title = '';
      this.event.start = '';
    },
    handleEventClick(info)
    {
      alert('You clicked this event: ' + info.event.title)
    }
  }
}
</script>