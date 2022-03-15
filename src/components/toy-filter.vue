<template>
  <section class="toy-filter">
    <p>Filter by:</p>
    <div class="form-container">
      <input
        v-focus
        v-model="filterBy.name"
        @input="setFilter"
        type="text"
        class="form-input"
        placeholder="Toy name"
      />
      <span>
        <el-checkbox
          class="checkmark"
          v-model="filterBy.inStock"
          @change="setFilter"
          label="In Stock"
          size="large"
        />
      </span>
      
      <el-select
        v-model="filterBy.labels"
        @change="setFilter"
        multiple
        placeholder="Label"
        style="width: 240px"
      >
        <el-option
          v-for="item in labelOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <el-select v-model="value" placeholder="Sort by">
      <el-option
        v-for="option in sortOptions"
        @change="setFilter"
        v-model="filterBy.sortBy"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        :disabled="option.disabled"
      />
    </el-select>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        name: "",
        inStock: ref(true),
        labels: ref([]),
        sortBy: ref(""),
      },
      labelOptions: [
        { value: "On Wheels", label: "On Wheels" },
        { value: "Box Game", label: "Box Game" },
        { value: "Art", label: "Art" },
        { value: "Baby", label: "Baby" },
        { value: "Doll", label: "Doll" },
        { value: "Puzzle", label: "Puzzle" },
        { value: "Outdoor", label: "Outdoor" },
      ],
      sortOptions: [
        { value: "name", label: "Name" },
        { value: "price", label: "Price" },
        { value: "created", label: "Created" },
      ],
    };
  },
  methods: {
    setFilter() {
      console.log("this.filterBy:", this.filterBy);

      this.$emit("setFilter", JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>
