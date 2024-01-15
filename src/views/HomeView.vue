<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        weekends: false, // initial value,
    events:[
      {title:'teste', date:'2024-01-01'},
      {title:'teste', date:'2024-01-01'},
      {title:'teste', date:'2024-01-01'},
      {title:'teste', date:'2024-01-01'},
      {title:'teste', date:'2024-01-01'},
    ]
      }
    }
  },
  methods: {
    toggleWeekends: function() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
    }
  }
}
</script>
<template>
  <button @click="toggleWeekends">toggle weekends</button>
  <FullCalendar :options="calendarOptions" />
</template>