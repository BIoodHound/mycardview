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
      :src="getBodyEnemy.image"
    ></v-img>

    <v-card-title>{{getBodyEnemy.name}}</v-card-title>

    <v-card-text>
      <div>{{getBodyEnemy.description}}</div>
    </v-card-text>

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
          <div id="ataque"><p class="attack">{{getBodyEnemy.attack}}</p></div>
        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
          <div id="vida"><p class="life">{{getBodyEnemy.health}}</p></div>
        </v-card-text>
      </div>
    </div> 
  </v-card>
</template>

<script>
import{mapGetters} from 'vuex'
export default {
  name: "enemy",
  components: {},
  data: () => ({
    image: '',
    name: '',
    description: '',
    attack: '',
    health: ''
  }),
computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getBodyEnemy'])
  },
  mounted(){
  },
  methods: {
  },
};
</script>


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