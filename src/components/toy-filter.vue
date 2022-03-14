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
    <select class="select" name="labels" id="labels" @change="setFilter" multiple>
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
          value="1"
          hidden
        />
        Price</label
      > |
      <label>
        <input
          type="radio"
          v-model.number="filterBy.sortBy"
          @change="setFilter"
          value="-1"
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
        label: 'on wheels',
        sortBy: 'name',
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', this.filterBy);
    },
    //  setSort() {
    //    this.$emit('setSort', this.sortBy);
    //  },
    toggleInStock() {
      this.filterBy.inStock = !this.filterBy.inStock;
    },
  },
};
</script>
