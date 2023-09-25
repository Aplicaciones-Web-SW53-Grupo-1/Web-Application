<script>

import {defineComponent} from "vue";
import ChooseSchedule from "@/components/ChooseSchedule.vue";

export default defineComponent({
  components: {ChooseSchedule}
})
</script>

<template>
<ChooseSchedule v-bind:id="this.$route.params.id"></ChooseSchedule>
</template>

<style scoped>

</style>