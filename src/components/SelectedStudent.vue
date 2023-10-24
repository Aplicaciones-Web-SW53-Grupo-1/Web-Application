<script>
  import ScoreService from "@/services/Score.service";
  import {ref} from "vue";


  export default{
    name: "SelectedStudent",
    props:{
      id:""
    },
    data(){
      return {
        student: "",
        grades: [],
        scoreService: null,
        visible : ref(false),
        score:""
      }
    },
    methods:{
      editScore(data){
        console.log(data);
        location.reload();
      }
    },
    mounted() {
      this.scoreService = new ScoreService();
      //undefined id
      this.scoreService.getById(1).then((response)=>{
        let appointment = response.data;
        this.student = appointment;
        this.grades = appointment.grades;
      });
    }
  }
</script>

<template>
  <pv-card class="card">
    <template #content>
      <div class="content">
        <div>
          <img class="photo" alt="studentPhoto" v-bind:src="student.photo"/>
        </div>
        <div>
          <h2>{{student.name}}</h2>
          <h2>{{student.course}}</h2>
          <h2>{{student.age}}</h2>
        </div>
        <div class="button">
          <pv-button severity="secondary"><h3>Chat</h3></pv-button>
        </div>
      </div>
    </template>
  </pv-card>
  <div class="table">
    <pv-table :value="grades" tableStyle="min-width: 50rem">
      <pv-column field="test" header="Test"></pv-column>
      <pv-column header="Date">
        <template #body="slotProps">
          <p v-if="slotProps.data.date === '' ">
            UNCOMPLETED
          </p>
          <p v-else>
            {{slotProps.data.date}}<br>
            QUALIFIED
          </p>
        </template>
      </pv-column>
      <pv-column header="Score">
        <template #body="slotProps">
          <p v-if="slotProps.data.score === '' ">
            -/20
          </p>
          <p v-else>
            {{slotProps.data.score}}/20
            <i @click="visible = true" class="pi pi-pencil pencil" ></i>
            <pv-dialog v-model:visible="visible" modal v-bind:header="slotProps.data.test" :style="{ width: '40vw' }">
              <h3>{{ slotProps.data.date }}</h3>
              <pv-input-text type="number" v-model="score" placeholder="Enter the score"></pv-input-text>
              <pv-button label="Update" severity="success" @click="editScore(slotProps.data)"></pv-button>
            </pv-dialog>
          </p>
        </template>
      </pv-column>
    </pv-table>
  </div>

</template>

<style scoped>
.content{
  display: flex;
}
.photo{
  width:30%;
}

.card, .table{
  margin:5% 10%;
  border-radius:20px;
}

.button{
  margin-left:30%;
  margin-right:10%;
}

.pencil:hover{
  color: blue;
  cursor: pointer;
}

</style>