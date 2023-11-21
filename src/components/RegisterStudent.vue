<script >
import StudentService from "@/services/Student.service"
export default {
  name: "registerStudent",
  data(){
    return{
      name: null,
      lastname: null,
      email: null,
      password: null,
      selectedGenre: null,
      genres: [
        {name: 'Male', code: 'M'},
        {name: 'Female', code: 'F'}
      ],
      birthday: null,
      genre: null,
      cellphone: null,
      value: null,
      tried: false,
      studentService: null,
      students: [],
      student: {},
      image: null,
    };
  },
  created(){
    this.studentService = new StudentService();
    this.studentService.getAll().then((response)=>{
      this.students = response.data;
    });
  },

  methods: {

    register() {
      const formattedDate = this.value.toISOString().split('T')[0];

      this.student={
        id: this.students.length+1,
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        genre: this.selectedGenre,
        birthday: formattedDate,
        cellphone: this.cellphone,
        image: "https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_people_person_profile_student_user_icon_123383.png",
      }

      this.studentService.create(this.student);
    }
  }
}
</script>

<template>
  <div class="registerContainer">

  <div class="image-upload-container">
    <div class="image-preview">
      <img src="../assets/images/guest.webp" alt="User Image" />
    </div>
    <div class="upload-button">
      <pv-fileupload mode="basic" accept="image/*" @upload="" maxFileSize="1000" label="Choose Image"/>
    </div>
  </div>

  <div class="register-form">
      <div class="title-form">
        <h2>Register</h2>
      </div>

      <div class="inputContainers">

        <div class="inputContainer">
          <label for="name">Name</label>
          <pv-input-text v-model="name" id="name" type="text" />
        </div>

        <div class="inputContainer">
          <label for="lastname">Last Name</label>
          <pv-input-text v-model="lastname" id="lastname" type="text" />
        </div>

      </div>

      <div class="inputContainers">

        <div class="inputContainer">
          <label for="email">Email</label>
          <pv-input-text v-model="email" id="email" type="email" />
        </div>

        <div class="inputContainer">
          <label for="calendar">Birthday</label>
          <pv-calendar v-model="value" dateFormat="dd/mm/yy" id="calendar" placeholder="Day/Month/Year"/>
        </div>

      </div>

      <div class="inputContainers">

        <div class="inputContainer">
          <label for="genre">Genre</label>
          <pv-dropdown v-model="selectedGenre" :options="genres" optionLabel="name" id="genre" placeholder="Select a Genre" />
        </div>

        <div class="inputContainer">
          <label for="cellphone">Cellphone</label>
          <pv-input-text v-model="cellphone" id="cellphone" type="string" />
        </div>

      </div>

      <div class="inputContainers">

        <div class="inputContainer">
          <label for="password">Password</label>
          <pv-input-text v-model="password" id="password" type="password" placeholder="Password"/>
        </div>

        <div class="inputContainer">
          <label for="re-password">Repeat Password</label>
          <pv-input-text id="re-password" type="password" placeholder="Repeat Password"/>
        </div>

      </div>

      <div class="buttonContainer">
        <router-link to="login-student"> <pv-button @click="register()" label="Register" class="p-button-lg"></pv-button> </router-link>
      </div>

    </div>
  </div>
</template>

<style scoped>
.registerContainer {
  display: flex;
  justify-content: space-between;
}

.image-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8.5vw;
}

.image-preview {
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.image-preview img {
  max-width: 100%;
  max-height: 100%;
}

.upload-button {
  text-align: center;
}

.title-form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h3{
  text-align: center;
  color: rgb(128, 128, 128);
}
.inputContainer{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1rem 2rem;
}
.inputContainers{
  display: flex;
  justify-content: space-between;
}

.p-button-lg{
  background-color: #709A8E;
  color: black;
}
.buttonContainer{
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-form{
  padding: 6vw;
  margin-right: 5vw;
}

@media (max-width: 750px){
  .inputContainers{
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>