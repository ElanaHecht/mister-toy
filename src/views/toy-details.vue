<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p><span class="fw-bold">ID:</span> {{ toy._id }}</p>
      <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
      <p><span class="fw-bold">Price:</span> {{ $filters.currencyUSD(toy.price) }}</p>
      <p><span class="fw-bold">Categories:</span> {{ labels }}</p>
      <p><span class="fw-bold">Added:</span> {{ $filters.timeFormat(toy.createdAt) }}</p>
      <p><span class="fw-bold">In Stock:</span> {{ inStock }}</p>
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js';

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
    };
  },
  created() {
    const { id } = this.$route.params;
    toyService.getById(id).then((toy) => {
      this.toy = toy;
    });
  },
  methods: {
    goBack() {
      this.$router.push('/toy');
    },
  },
  computed: {
    labels() {
      console.log('this.toy.labels:', this.toy.labels);
      
      return this.toy.labels.toString()
    },
    inStock(){
      return (this.toy.inStock) ? 'Yes' : 'No';
    }
  },
};
</script>
