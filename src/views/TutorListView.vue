<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
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
        const response = await axios.get("http://localhost:5255/api/Tutor");
        this.tutores = response.data;
      } catch (error) {
        console.error("Error al obtener tutores:", error);
      }
    },
    async fetchReviewsFromAPI() {
      try {
        const response = await axios.get("http://localhost:5255/Review");
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

  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.tutor-list-view {
  @media (max-width: 768px) {
    padding: 10px;
  }
}
</style>
