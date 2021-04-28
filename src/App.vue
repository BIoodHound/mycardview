<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
      <principal/>
    </v-main>
  </v-app>
</template>

<script>
import principal from './components/views/principal.vue';
export default {
  name: "App",
  components: {
    principal,
  },
  data: () => ({
    //
  }),
};
</script>