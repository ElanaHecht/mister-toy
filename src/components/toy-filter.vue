<template>
  <section class="toy-filter">
    <input
      v-focus
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      class="form-input"
      placeholder="Search toy name"
    />
    <input class="checkmark" type="checkbox" id="stock" @change="toggleInStock" checked="checked" />
    <label for="stock">In Stock</label>

    <p for="labels">Choose a category:</p>
    <select class="select" name="labels" id="labels" @change="setFilter" v-model="filterBy.labels" multiple>
      <option value="on wheels">On Wheels</option>
      <option value="box game">Box Game</option>
      <option value="art">Art</option>
      <option value="baby">Baby</option>
      <option value="doll">Doll</option>
      <option value="puzzle">Puzzle</option>
      <option value="outdoor">Outdoor</option>
    </select>

    <div class="sort-container">
      <label>
        <input
          type="radio"
          v-model="filterBy.sortBy"
          @change="setFilter"
          value="name"
          hidden
        />
        Name</label
      > |
      <label>
        <input
          type="radio"
          v-model.number="filterBy.sortBy"
          @change="setFilter"
          hidden
        />
        Price</label
      > |
      <label>
        <input
          type="radio"
          v-model.number="filterBy.sortBy"
          @change="setFilter"
          hidden
        />
        Created</label
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        name: '',
        inStock: true,
        labels: [],
        sortBy: 'name',
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)));
    },
    toggleInStock() {
      this.filterBy.inStock = !this.filterBy.inStock;
    },
  },
};
</script>
