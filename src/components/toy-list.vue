<template>
  <ul class="toy-list clean-list grid gap-3">
    <toy-preview @removeToy="removeToy" v-for="toy in toys" :toy="toy" :key="toy._id" />
  </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'

export default {
  name: 'toy-list',
  props: {
    toys: {
      type: Array,
      required: true,
    },
  },
  components: {
    toyPreview,
  },
  created(){
console.log(this.toys);
  },
  methods: {
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
