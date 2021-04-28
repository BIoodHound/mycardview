

<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="getBodyBuf.imagen"
    ></v-img>

    <v-card-title>{{getBodyBuf.nombre}}</v-card-title>

    <v-card-text>
      <div>{{getBodyBuf.info}}</div>
    </v-card-text>

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
          <div id="ataque"><p class="attack">{{getBodyBuf.buffo}}</p></div>
        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
          <div id="vida"><p class="life">{{getBodyBuf.vida}}</p></div>
        </v-card-text>
      </div>
    </div> 
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "bufo",
  components: {},
  data: () => ({
    valid: true,
    imagen: "",
    nombre: "",
    info: "",
    buffo: "",
    vida: "",
  }),
  computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getBodyBuf'])
  },
  mounted(){

  },
  methods: {},
};
</script>


<style>
  #ataque {
    background-color: rgba(255, 255, 0, 0.507);
    color: black;
    border-block-color: black;
    border-radius: 1000px;
    height: 50px;
    width: 50px;
  }
  #vida {
    background-color: rgba(255, 0, 0, 0.507);
    color: black;
    border-block-color: black;
    border-radius: 0% 50% 50% 50%;
    transform: rotate(45deg);
    height: 50px;
    width: 50px;
  }
  .life {
    transform: rotate(-45deg);
    padding: 15px;
    padding-left: 21px;
  }
  .attack {
    padding: 15px;
    padding-left: 21px;
  }
  #tipo {
    text-align: center;
  }
</style>
