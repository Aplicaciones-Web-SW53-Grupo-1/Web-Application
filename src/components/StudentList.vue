<template>
  <div class="student-list">
    <div class="p-grid">
      <div v-for="student in students" :key="student.id" class="p-col-12 p-md-6 p-lg-4">
        <Card class="student-card">
          <template #content>
            <div class="student-info">
              <!-- Nombre y Apellido -->
              <div class="student-name">{{ student.name }} {{ student.lastname }}</div>
              <div class="student-age">{{ student.age }} años</div>
              <!-- Contenedor para la foto y los detalles -->
              <div class="student-details">
                <div class="student-photo">
                  <img :src="student.image" alt="Foto del estudiante" />
                </div>
                <!-- Especialidad -->
                <div class="student-specialty">{{ student.specialty }}</div>
              </div>
            </div>
          </template>
          <template #footer>
            <!-- Botón "See More" -->
            <Button class="p-button-text" @click="verMas(student)">See More</Button>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Button from 'primevue/button';
import router from "@/router";

export default {
  props: {
    students: Array,
  },
  components: {
    Card,
    Button,
  },
  methods: {
    verMas(student) {
      router.push('/selected')
    },
  },
};
</script>

<style scoped>
.student-card {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: #f5f5f5;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

.student-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
}

.student-name {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.student-age {
  font-size: 16px;
  text-align: center;
  color: #555;
  margin-top: 5px;
}

.student-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.student-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;
}

.student-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.student-specialty {
  font-size: 18px;
  text-align: center;
  color: #007bff;
  margin-top: 10px;
}

.p-button-text {
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
}
</style>
