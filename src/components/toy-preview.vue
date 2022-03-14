<template>
  <li class="toy-preview">
    <custom-card>
      <template #header>
        <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
        <p>
          <span class="fw-bold">Price:</span>
          {{ $filters.currencyUSD(toy.price) }}
        </p>
        <p>
          <span class="fw-bold">Labels:</span>
          {{ labels }}
        </p>
        <p>
          <span class="fw-bold">Created:</span>
          {{ $filters.timeFormat(toy.createdAt) }}
        </p>
        <p>
          <span class="fw-bold">In stock?</span>
          {{ inStock }}
        </p>
      </template>

      <template #footer>
        <div class="btn-group">
          <button @click="goToEdit" class="btn btn-primary">edit</button>
          <button @click="goToDetail" class="btn btn-info">details</button>
          <button @click="removeToy(toy._id)" class="btn btn-danger">
            delete
          </button>
        </div>
      </template>
    </custom-card>
  </li>
</template>

<script>
import customCard from './custom-card.vue';

export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  components: {
    customCard,
  },
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy.id}`);
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy.id}`);
    },
    removeToy(toyId) {
      this.$emit('removeToy', toyId);
    },
  },
  computed: {
    labels() {
      return this.toy.labels.toString();
    },
    inStock() {
      return this.toy.inStock ? 'Yes' : 'No';
    },
  },
};
</script>
