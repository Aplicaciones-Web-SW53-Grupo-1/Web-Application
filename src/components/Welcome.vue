<script >
export default {
  name: "Welcome",
}
</script>

<template>
  <div class="welcomeContainer">
    <div class="column w-full center-item" >
      <h1 style="text-align:center">How Would you like to log in </h1>
      <br>
      <div class="pictures">
        <div class="picture">
          <router-link to="/register-student" >
            <div class="welcomeImgCard ">
              <img src="../assets/images/estudiante.jpg"
                   alt="student with books" class="images-Welcome">
              <h1 style="text-align:center">Student </h1>
            </div>
          </router-link>
        </div>

        <div class="picture">
          <router-link to="/">
            <div class="welcomeImgCard">
              <img src="../assets/images/tutor.jpg" alt="tutor" class="images-Welcome">
              <h1 style="text-align:center">Tutor</h1>
            </div>
          </router-link>
        </div>

      </div>
    </div>


  </div>


</template>

<style scoped>
.welcomeContainer {
  padding: 2vw;
  align-content: center;
}

.images-Welcome{
  width: 600px;
}

.welcomeImgCard {
  border-radius: 5%;
}

.pictures{
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
}

.picture{
  padding-left: 5vw;
  padding-right: 5vw;
}

.column{
  display:flex;
  flex-direction: column;
}

.w-full{
  width: 100%;
}

.center-item{
  justify-content: center;
}

@media (max-width: 1000px) {
  .pictures{
    display: block;
  }
  .picture{
    text-align: center;
  }
}
</style>