<template>
  <v-app>
    <Toolbar/>
    <v-main>
      <Carrousel/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Toolbar,
    Carrousel,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
