<template>
  <GMapMap
      :center="center"
      :zoom="13"
      map-type-id="terrain"
      style="width: 500px; height: 700px;"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: 'map',
  data() {
    return {
      center: {lat: 31.715427, lng: 35.09928},
      markers: [
        {
          position: {
            lat: 31.714427, lng: 35.17
          },
        },
        {
          position: {
            lat: 31.716427, lng: 35.2
          },
        },
        {
          position: {
            lat: 31.715527, lng: 35.15
          },
        },
        {
          position: {
            lat: 31.713427, lng: 35.13
          },
        }, // Along list of clusters
      ]
    }
  }
}
</script>
<style>
.vue-map-container{
   height: 700px;
}
</style>