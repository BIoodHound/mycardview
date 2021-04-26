<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
      <!--<HelloWorld/>-->
      <viewCard/>
      <accountView/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import viewCard from './components/views/viewCard';
import accountView from './components/views/accountView';

export default {
  name: 'App',

  components: {
    //HelloWorld,
    viewCard,
    accountView,
  },

  data: () => ({
    //
  }),
};
</script>
