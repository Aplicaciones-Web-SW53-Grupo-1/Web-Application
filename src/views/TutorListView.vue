<template>
  <div class="tutor-list-view">
    <h1 class="tutorlist">Lista de Tutores</h1>
    <TutorList :tutores="tutores" :reviews="reviews" />
  </div>
</template>

<script>
import TutorList from "@/components/TutorList.vue";
import axios from "axios";

export default {
  components: {
    TutorList,
  },
  data() {
    return {
      tutores: [],
      reviews: [],
    };
  },
  methods: {
    async fetchTutoresFromAPI() {
      try {
        const response = await axios.get("http://localhost:3000/tutores");
        this.tutores = response.data;
      } catch (error) {
        console.error("Error al obtener tutores:", error);
      }
    },
    async fetchReviewsFromAPI() {
      try {
        const response = await axios.get("http://localhost:3000/reviews");
        this.reviews = response.data;
      } catch (error) {
        console.error("Error al obtener calificaciones:", error);
      }
    },
  },
  mounted() {
    this.fetchTutoresFromAPI();
    this.fetchReviewsFromAPI();
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #E3BD86;
  padding: 0;
}

.tutorlist {
  text-align: center;
  font-style: italic;
}

.tutor-list-view {
  /* Agrega estilos personalizados según sea necesario */
}
</style>
