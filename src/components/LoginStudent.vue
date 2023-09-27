<script>
import StudentService from "@/services/Student.service"
import router from "@/router";

export default{
  name: "loginStudent",
  data(){
    return{
      students: [],
      student: {},
      studentService: null,
      incorrectData: true,
      tried: false,
      display: false,
      email: "",
      password: "",
    }
  },
  methods:{
    login(){
      this.studentService = new StudentService();
      this.studentService.getAll().then((response)=> {
        this.students = response.data;

        for (let n in this.students){
          if(this.students[n].email === this.email && this.students[n].password === this.password){
            this.student = this.student[n];
            this.incorrectData = false;
            break;
          }
        }
        if(this.incorrectData) {
          this.tried = true;
        }else {
          router.push('/user-home');/* Aqui ponen la ruta*/
        }

      })
    }
  }
}

</script>

<template>
  <div class="center-container">


  <pv-card class="card_log_in">
    <template #title>
      Login
    </template>

    <template #content >
      <div class="inputContainer">
        <label for="email">Email</label>
        <pv-input-text id="email" type="email" placeholder="Email" class="inputBox" v-model="email"/>
      </div>

      <div class="inputContainer">
        <label for="password">Password</label>
        <pv-input-text id="password1" type="password" placeholder="Password" class="inputBox" v-model="password"/>
      </div>
      <div class="lastPart">
        <pv-dialog position="top" v-model:visible="tried"  >Incorrect email or password. Please try again.</pv-dialog>
        <pv-button @click="login()" class="buttonLogin" label="Login" /><br>
        <router-link to="/register-student" class="link">You do not have an account? \ Sign up</router-link>
      </div>
    </template>
  </pv-card>
  </div>
</template>

<style scoped>
.center-container{
  display:flex;
  justify-content: center;
}
.card_log_in{
  width: 500px;
  margin-top: 8vw;
}
.inputContainer{
  width: 100%;
  margin-left: 10px;
  margin-right: 20px;
  padding: 1vw 0;
}

.buttonLogin{
  text-align: center;
  background-color: #518d51;
  margin-bottom:10px;
}
.inputBox{
  width:95%;
  border-color: #000000;
}

.lastPart{
  text-align: center;
  align-content: center;
  align-items: center;
  margin:25px;
}

.link{
  color: #000000;
}
</style>