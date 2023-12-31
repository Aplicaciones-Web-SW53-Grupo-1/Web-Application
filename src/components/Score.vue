<template>
  <div class="scores">
    <TabView :model="tabs">
      <template v-for="tab in tabs" :key="tab.title">
        <TabPanel :header="tab.title">
          <div>
            <div class="total">
              <div class="total-label">Total</div>
              <div class="total-value">{{ calculateUserTotal(tab.title) }}</div>
            </div>
            <div v-if="tab.title === 'All'">

              <div v-for="score in getScores('All')" :key="score.type" class="general">
                <div class="type">{{ score.type }}</div>
                <div class="date">{{ formatDate(score.date) }}</div>
                <div class="score">{{ score.scoreValue }}</div>
              </div>
            </div>
            <div v-else-if="tab.title === 'Graded'">

              <div v-for="score in getScores('Graded')" :key="score.type" class="general">
                <div class="type">{{ score.type }}</div>
                <div class="date">{{ formatDate(score.date) }}</div>
                <div class="score">{{ score.scoreValue }}</div>
              </div>
            </div>
            <div v-else-if="tab.title === 'Submitted'">

              <div v-for="score in getScores('Submitted')" :key="score.type" class="general">
                <div class="type">{{ score.type }}</div>
                <div class="date">{{ formatDate(score.date) }}</div>
                <div class="score">{{ score.scoreValue }}</div>
              </div>
            </div>
          </div>
        </TabPanel>
      </template>
    </TabView>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import {formatDate} from "@fullcalendar/core";

export default defineComponent({
  components: {
    TabView,
    TabPanel,
  },
  props: {
    scores: Array,
    selectedStudentId: String,
  },
  data() {
    return {
      tabs: [
        { title: "All" },
        { title: "Graded" },
        { title: "Submitted" },
      ],
    };
  },
  computed: {
    gradedScores() {
      return this.scores.filter(score => score.status === 'GRADED');
    },
    submittedScores() {
      return this.scores.filter(score => score.status === 'SUBMITTED');
    },
  },
  methods: {
    formatDate,
    getScores(tabTitle) {
      if (tabTitle === 'Graded') {
        return this.gradedScores;
      } else if (tabTitle === 'Submitted') {
        return this.submittedScores.concat(this.gradedScores);
      } else {
        return this.scores;
      }
    },
    calculateUserTotal(tabTitle) {
      const userScores = this.getScores(tabTitle);
      const userTotal = userScores.reduce((total, score) => {
        if (score.scoreValue) {
          const scoreParts = score.scoreValue.split('/');
          if (scoreParts.length === 2) {
            return total + Number(scoreParts[0]);
          }
        }
        return total;
      }, 0);
      return userTotal + '/' + this.calculateAvailableTotal(tabTitle);
    },
    calculateAvailableTotal(tabTitle) {
      const availableScores = this.getScores(tabTitle);
      const totalAvailable = availableScores.reduce((total, score) => {
        if (score.scoreValue) {
          const scoreParts = score.scoreValue.split('/');
          if (scoreParts.length === 2) {
            return total + Number(scoreParts[1]);
          }
        }
        return total;
      }, 0);
      return totalAvailable;
    },
  },
});
</script>

<style scoped>
.scores {
  max-width: 600px;
  margin: 0 auto;

}

.general {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.type {
  flex: 3;
  text-align: left;
}

.date {
  flex: 3;
  text-align: left;
}

.score {
  flex: 2;
  text-align: right;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.total-label {
  flex: 1;
}

.total-value {
  flex: 2;
  text-align: right;
}
@media (max-width: 600px) {
  .general {
    flex-direction: column;
    align-items: flex-start;
  }

  .type,
  .date,
  .score {
    flex: none;
    width: 100%;
    text-align: left;
  }
}
</style>