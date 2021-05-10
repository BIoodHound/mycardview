<template>
  <v-card
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
<<<<<<< HEAD:src/components/views/viewCard.vue
      src="getBodyCard.imagen"
    ></v-img>

    <v-card-title>{{getBodyCard.name}}</v-card-title>

    <v-card-text>
      <div>{{getBodyCard.info}}</div>
=======
      :src="getBodyBuf.image"
    ></v-img>

    <v-card-title>{{getBodyBuf.name}}</v-card-title>

    <v-card-text>
      <div>{{getBodyBuf.description}}</div>
>>>>>>> 906434a26c7a1e940cfe3fecf8c8dff0c5fb937b:src/components/views/buffo.vue
    </v-card-text>

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
<<<<<<< HEAD:src/components/views/viewCard.vue
          <div id="ataque"><p class="attack">{{getBodyCard.attack}}</p></div>
=======
          <div id="ataque"><p class="attack">{{getBodyBuf.attack_buff}}</p></div>
>>>>>>> 906434a26c7a1e940cfe3fecf8c8dff0c5fb937b:src/components/views/buffo.vue
        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
<<<<<<< HEAD:src/components/views/viewCard.vue
          <div id="vida"><p class="life">{{getBodyCard.health}}</p></div>
=======
          <div id="vida"><p class="life">{{getBodyBuf.hp_buff}}</p></div>
>>>>>>> 906434a26c7a1e940cfe3fecf8c8dff0c5fb937b:src/components/views/buffo.vue
        </v-card-text>
      </div>
    </div> 
  </v-card>
</template>

<script>
import{mapGetters} from 'vuex'
export default {
<<<<<<< HEAD:src/components/views/viewCard.vue
  name: "viewCard",
  components: {},
  data: () => ({
    valid: true,
    imagen: "",
    nombre: "",
    info: "",
    buffo: "",
    vida: "",
=======
  name: "buffo",
  components: {},
  data: () => ({
    image: '',
    name: '',
    description: '',
    attack_buff: '',
    hp_buff: '',
    windfury: '',
    divineShield: ''
>>>>>>> 906434a26c7a1e940cfe3fecf8c8dff0c5fb937b:src/components/views/buffo.vue
  }),
computed:{
    posts(){
      return this.$store.state.posts
    },
<<<<<<< HEAD:src/components/views/viewCard.vue
    ...mapGetters(['getBodyCard'])
=======
    ...mapGetters(['getBodyBuf'])
>>>>>>> 906434a26c7a1e940cfe3fecf8c8dff0c5fb937b:src/components/views/buffo.vue
  },
  mounted(){
  },
  methods: {
<<<<<<< HEAD:src/components/views/viewCard.vue
    getCard() {
      this.$store.dispatch("getCard");
    }
=======
>>>>>>> 906434a26c7a1e940cfe3fecf8c8dff0c5fb937b:src/components/views/buffo.vue
  },
};
</script>

<<<<<<< HEAD:src/components/views/viewCard.vue
=======

>>>>>>> 906434a26c7a1e940cfe3fecf8c8dff0c5fb937b:src/components/views/buffo.vue
<style>
  #ataque {
    background-color: rgba(255, 255, 0, 0.507);
    color: black;
    border-block-color: black;
    border-radius: 1000px;
    height: 52px;
    width: 52px;
  }
  #vida {
    background-color: rgba(255, 0, 0, 0.507);
    color: black;
    border-block-color: black;
    border-radius: 0% 50% 50% 50%;
    transform: rotate(45deg);
    height: 55px;
    width: 55px;
  }
  .life {
    transform: rotate(-45deg);
    padding: 15px;
    padding-left: 19px;
  }
  .attack {
    padding: 15px;
    padding-left: 21px;
  }
  #tipo {
    text-align: center;
  }
</style>