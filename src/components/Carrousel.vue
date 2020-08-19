<template>
  <v-carousel
    cycle
    height='600px'
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="srcs[i]"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
    </v-carousel-item>
  </v-carousel>
</template>


<script>
  export default {
    data () {
      return {
        srcs: [
          require('../assets/Car1.jpg'),
          require('../assets/Car3.jpg'),
          require('../assets/Car5.jpg'),
        ],
        slides: [
          'First',
          'Second',
          'Third'
        ],
      }
    },
  }
</script>