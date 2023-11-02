<script>
  import ScoreService from "@/services/Score.service";
  import {ref} from "vue";
  import StudentService from "@/services/Student.service";


  export default{
    name: "SelectedStudent",
    props:{
      id:""
    },
    data(){
      return {
        studentId:null,
        student: "",
        grades: [],
        scoreService: null,
        studentService: null,
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
      this.studentService = new StudentService();
      //undefined id
      this.scoreService.getById(1).then((response)=>{
        this.grades = response.data;
        this.studentId = this.grades[0].studentId;
        this.studentService.getById(this.studentId).then((response) => {
          this.student = response.data;
          console.log(this.student);
        });
      });
    }
  }
</script>

<template>
  <pv-card class="card">
    <template #content>
      <div class="content">
        <div>
          <img class="photo" alt="studentPhoto" v-bind:src="student.image"/>
        </div>
        <div>
          <h2>{{student.name}} {{student.lastname}}</h2>
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
      <pv-column field="type" header="Test"></pv-column>
      <pv-column field="date" header="Date"></pv-column>
      <pv-column field="status" header="Status"></pv-column>
      <pv-column header="Score">
        <template #body="slotProps">
          <p v-if="slotProps.data.score === '' ">
            -/20
          </p>
          <p v-else>
            {{slotProps.data.score}}
            <i @click="visible = true" class="pi pi-pencil pencil" ></i>
            <pv-dialog v-model:visible="visible" modal v-bind:header="slotProps.data.type" :style="{ width: '40vw' }">
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