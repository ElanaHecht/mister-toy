<template>
  <section class="toy-app">
    <toy-filter @setFilter="setFilter" />
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toysToShow" />
    <button @click="goToEdit" class="btn btn-secondary">Add a new toy</button>
  </section>
</template>

<script>
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  data() {
    return {
      filterBy: null,
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    toysToShow() {
      if (!this.filterBy) return this.toys
      const regex = new RegExp(this.filterBy.name, 'i')
      return this.toys.filter((toy) => regex.test(toy.name))
    },
  },
  created() {},
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
    },
    goToEdit() {
      this.$router.push(`/toy/edit/`);
    },
  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>
