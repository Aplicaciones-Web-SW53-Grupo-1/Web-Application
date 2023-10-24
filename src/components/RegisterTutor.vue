<script>
  import TutorService from "@/services/Tutor.service";

  export default {
    name: "registerTutor",
    data(){
      return{
        name: null,
        lastname: null,
        email: null,
        password: null,
        cellphone: null,
        tutorService: null,
        tutors: [],
        tutor: {},
        image: null,
      };
    },
    created(){
      this.tutorService = new TutorService();
      this.tutorService.getAll().then((response)=>{
        this.tutors = response.data;
      });
    },

    methods:
        {
          register(){
            this.tutor={
              id: this.tutors.length,
              name: this.name,
              lastname: this.lastname,
              email: this.email,
              password: this.password,
              cellphone: this.cellphone,
              image: "https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
            }

            this.tutorService.create(this.tutor);
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
  padding: 9vw;
  margin-left: 30px;
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
  margin-top: 30px;
}

.register-form{
  padding: 8vw;
  margin-right: 7vw;
}

@media (max-width: 750px){
  .inputContainers{
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>