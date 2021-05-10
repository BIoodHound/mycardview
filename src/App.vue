<template>
  <v-app style="
    background-image: url(https://i1.wp.com/www.marcelopedra.com.ar/blog/wp-content/uploads/2013/10/animated-gifs-of-fighting-game-backgrounds-50.gif?resize=800%2C336&ssl=1);
    background-repeat: no-repeat;
    background-size: cover;
">
    <v-spacer></v-spacer>
    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>
//import Dashboard from './components/views/Dashboard';
//import viewCard from './components/views/viewCard';
//import accountView from './components/views/accountView';
//import Login from "./components/views/Login";
//import Register from "./components/views/Register";
//import principal from './components/views/principal';

export default {
  name: "App",

  components: {
    //Dashboard,
    //viewCard,
    //accountView,
    //Login,
    //Register,
    //principal,
  },
  data: () => ({
    //
  }),
};
</script>