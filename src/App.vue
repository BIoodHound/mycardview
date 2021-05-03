<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
      <!--<viewCard/>-->
      <accountView/>
    </v-main>
  </v-app>
</template>

<script>
//import viewCard from './components/views/viewCard';
import accountView from './components/views/accountView';
//import Login from "./components/views/Login";
//import Register from "./components/views/Register";

export default {
  name: "App",

  components: {
    //viewCard,
    accountView,
    //Login,
    //Register,
  },

  data: () => ({
    //
  }),
};
</script>
