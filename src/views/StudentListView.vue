<template>
  <div class="student-list-view">
    <h1 class="studentlist">Lista de Estudiantes</h1>
    <StudentList :students="students" />
  </div>
</template>

<script>
import StudentList from "@/components/StudentList.vue";
import axios from "axios"; // Importa axios para realizar la solicitud HTTP

export default {
  components: {
    StudentList,
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    async fetchStudentsFromAPI() {
      try {

        const response = await axios.get("http://localhost:3000/students"); // Asegúrate de que la URL coincida con la configuración de tu JSON Server

        this.students = response.data;
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    },
  },
  mounted() {
    this.fetchStudentsFromAPI();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #E3BD86;
  padding: 0;
}
.studentlist {
  text-align: center; /* Centra el texto horizontalmente */
  font-style: italic;
  /* Agrega más propiedades de estilo según tus preferencias */
}

.student-list-view {

}
</style>
