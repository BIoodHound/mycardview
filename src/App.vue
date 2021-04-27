<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
      <Dashboard/>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './components/views/Dashboard';
//import viewCard from './components/views/viewCard';
//import accountView from './components/views/accountView';
//import Login from "./components/views/Login";
//import Register from "./components/views/Register";

export default {
  name: "App",

  components: {
    Dashboard,
    //viewCard,
    //accountView,
    //Login,
    //Register,
  },

  data: () => ({
    //
  }),
};
</script>
