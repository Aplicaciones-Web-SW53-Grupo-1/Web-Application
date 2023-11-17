<template>
  <div class="score-view">
    <h1 class="scores">Scores</h1>
    <Score :scores="filteredScores" />
  </div>
</template>

<script>
import Score from "@/components/Score.vue";
import axios from "axios";

export default {
  components: {
    Score,
  },
  data() {
    return {
      scores: [],

      studentId: null,
    };
  },
  computed: {
    filteredScores() {
      return this.scores.filter((score) => {
        return score.studentId === this.studentId ;
      });
    },
  },
  methods: {
    fetchScoresAndStudent() {

      const studentId = this.$route.params.id;


      axios.get("http://localhost:3000/scores").then((response) => {
        this.scores = response.data;
      });


      this.studentId = parseInt(studentId);
    },
  },
  mounted() {

    this.fetchScoresAndStudent();
  },
  watch: {

    $route(to, from) {
      this.fetchScoresAndStudent();
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #E3BD86;
  padding: 0;
}
.scores {
  text-align: center;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.score-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
@media (max-width: 600px) {
  .score-view {
    padding: 10px;
  }

  .scores {
    font-size: 18px;
  }
}
</style>