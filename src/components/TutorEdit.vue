<template>
  <div class="user-profile">
    <div class="container">
      <div class="links">
        <router-link to="/user-home" class="link">
          <i class="pi pi-home"></i>
          <h2>Home</h2>
        </router-link>
        <router-link to="/tutorlist" class="link">
          <i class="pi pi-users"></i>
          <h2>Tutors</h2>
        </router-link>
        <router-link to="/user-profile" class="link">
          <i class="pi pi-user"></i>
          <h2>Profile</h2>
        </router-link>
        <router-link to="/user-edit" class="link">
          <i class="pi pi-cog"></i>
          <h2>Settings</h2>
        </router-link>
      </div>
      <router-link to="/" class="link logout">
        <i class="pi pi-sign-out"></i>
        <h3>Log out</h3>
      </router-link>
    </div>

    <div class="profile">
      <div class="profile-content">
        <div class="profile-image">
          <a href="#">
            <img src="../assets/images/student-icon.png" alt="User Logo" class="logo">
          </a>
        </div>

        <div class="formulary">
          <div class="file-1">
            <div class="input">
              <label for="username">Username</label>
              <br>
              <pv-input-text id="username" v-model="username" aria-describedby="username-help" />
            </div>

            <div class="input">
              <label for="email">Email</label>
              <br>
              <pv-input-text id="email" v-model="email" aria-describedby="email-help" />
            </div>

            <div class="input">
              <label for="cellphone">Cellphone</label>
              <br>
              <pv-input-text id="cellphone" v-model="cellphone" aria-describedby="cellphone-help" />
            </div>

            <label for="curriculum">Upload your Curriculum</label>
            <input type="file" id="curriculum" @change="uploadCurriculum" />

            <pv-button class="input" id="save">Save</pv-button>
          </div>

          <div class="file-2">
            <div class="input">
              <label for="lastname">Last Name</label>
              <br>
              <pv-input-text id="lastname" v-model="lastname" aria-describedby="lastname-help" />
            </div>

            <div class="input">
              <label for="dateBirth">Date of Birth</label>
              <br>
              <pv-calendar v-model="date" id="date" dateFormat="dd/mm/yy"></pv-calendar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #709A8E;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 101px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.link:hover {
  color: white;
}

.logout {
  margin-top: auto;
  color: white;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-content {
  display: flex;
  gap: 20px;
}

.profile-image img {
  width: 200px;
  height: 250px;
}

.formulary {
  display: flex;
  gap: 20px;
}

.input {
  display: flex;
  flex-direction: column;
}

#curriculum {
  margin-top: 10px;
}

#save {
  margin-top: 20px;
  background-color: #709A8E;
  color: black;
}
</style>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      cellphone: "",
      lastname: "",
      date: "",
    };
  },
  methods: {
    uploadCurriculum(event) {
      const file = event.target.files[0];

      console.log("Archivo subido:", file);
    },
  },
};
</script>
