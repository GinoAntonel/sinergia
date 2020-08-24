<template>
  <v-app>
    <Toolbar/>
    <v-main id="ccarrousel">
      <Carrousel/>
      <Stepper/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style >
#ccarrousel{
  background: black;
}
</style>

<script>
import Toolbar from './components/Toolbar';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Stepper from './components/Stepper';

export default {
  name: 'App',

  components: {
    Toolbar,
    Carrousel,
    Footer,
    Stepper
  },

  data: () => ({
    //
  }),
};
</script>
