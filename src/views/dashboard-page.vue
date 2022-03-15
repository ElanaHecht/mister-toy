<template>
  <section class="dashboard-page">
<h1>Dashboard</h1>
<price-chart :data="testData"/>
  </section>
</template>

<script>
import PriceChart from '../components/price-chart.vue';
export default {
  name: 'Home',
  data(){
    return{
      testData: {
      labels: ['Adult', 'Funny', 'Educational'],
      datasets: [
        {
          data: [],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B'],
        },
      ],
    }
    }
  },
  components: {
    PriceChart
  },
    created() {
      var avgs = this.$store.getters.avgPrice;
    for (var price of Object.keys(avgs)) {
      this.testData.datasets[0].data.push(+avgs[price])
    }  
  },
}
</script>

<style></style>