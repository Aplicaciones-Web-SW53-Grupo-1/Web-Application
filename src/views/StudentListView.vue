<template>
  <div class="student-list-view">
    <h1 class="studentlist">Lista de Estudiantes</h1>
    <StudentList :students="students" />
  </div>
</template>

<script>
import StudentList from "@/components/StudentList.vue";
import axios from "axios";

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

        const response = await axios.get("http://localhost:3000/students");

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
  text-align: center;
  font-style: italic;
  margin: 20px 0;
}

.student-list-view {
  padding: 20px
}
</style>
