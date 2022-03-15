<template>
  <PieChart :chartData="data" />
</template>

<script>
import { PieChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default {
  name: 'dashboard',
  components: { PieChart },
  data() {
    return {
    }
  },
};
</script>