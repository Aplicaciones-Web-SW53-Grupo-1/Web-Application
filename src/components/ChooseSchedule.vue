<script>
  import ScheduleService from "@/services/Schedule.service";
  import router from "@/router";

  export default {
    name: "ChooseSchedule",
    props:{
      id: ""
    },
    data(){
      return {
        scheduleService: null,
        schedules:[],
        schedulesTutor:[],
      }
    },
    methods:{
      payment(){
        router.push('/')/*Ruth to payment component*/
      }
    },
    mounted() {
      this.scheduleService = new ScheduleService();
      this.scheduleService.getAll().then((response)=> {
        this.schedules = response.data;
        let i = 0;
        for (let n in this.schedules){
          if(this.schedules[n].idTutor === Number(this.id)){
            this.schedulesTutor[i] = this.schedules[n];
            i++;
          }
        }
        console.log(this.schedulesTutor)

      })
    }
  }
</script>

<template>
  <div class="container">
    <h1>Make your schedule</h1>
  </div>
  <div class="sub-title">
    <h2>These are all available for this tutor</h2>
  </div>
  <div class="card">
    <pv-card v-for="schedule in schedulesTutor">
      <template #content>
        <div class="content">
        <div class = "pv-card-col">
          <h2>{{schedule.days}}</h2>
          <h2>{{schedule.time}}</h2>
        </div>
        <div class = "pv-card-col">
          <h2>{{schedule.TutorName}}</h2>
            <h2>{{schedule.price}}</h2>
        </div>
        <div class = "pv-card-col">
          <pv-button @click="payment()">
            <h2>Go to payment</h2>
          </pv-button>
        </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
  .container {
    display: grid;
    place-items: center;
    margin: auto;
  }

  .sub-title{
    padding-left: 60px;
  }

  .card{
    padding: 20px;
  }

  .p-card.p-component{
    margin: 10px 80px 30px 40px;
    border-style:solid;
    border-radius: 10px;
  }

  .content{
    display:flex;
  }

  .pv-card-col{
    margin-right: 200px;
  }

  .p-button.p-component{
    background-color: #709A8E;
    border-color: #709A8E;
    border-radius: 15px;
  }
</style>