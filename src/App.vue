<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
      <fight/>
    </v-main>
  </v-app>
</template>

<script>
import fight from './components/views/fight.vue';
export default {
  name: "App",
  components: {
    fight,
  },
  data: () => ({
    //
  }),
};
</script>