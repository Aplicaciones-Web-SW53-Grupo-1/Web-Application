<template>
  <div class="score-view">
    <h1 class="scores">Scores</h1>
    <div>
      <label for="studentSelect">Select a Student: </label>
      <select id="studentSelect" v-model="selectedStudentId" @change="filterScoresByStudent">
        <option v-for="student in students" :value="student.id">{{ student.name }}</option>
      </select>
    </div>
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
      students: [],
      selectedStudentId: null,
      tutorId: 1,
    };
  },
  computed: {
    filteredScores() {
      return this.scores.filter((score) => {
        return score.studentId === this.selectedStudentId && score.tutorId === this.tutorId;
      });
    },
  },
  methods: {
    filterScoresByStudent() {

      this.$forceUpdate();
    },
  },
  mounted() {

    axios.get("http://localhost:3000/students").then((response) => {
      this.students = response.data;
    });


    axios.get("http://localhost:3000/scores").then((response) => {
      this.scores = response.data;
    });
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
}

.score-view {
}
</style>
