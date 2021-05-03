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
      src="getBodyCard.image"
    ></v-img>

    <v-card-title>{{getBodyCard.name}}</v-card-title>

    <v-card-text>
      <div>{{getBodyCard.buffs}}</div>
    </v-card-text>

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
          <div id="ataque"><p class="attack">{{getBodyCard.attack}}</p></div>
        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
          <div id="vida"><p class="life">{{getBodyCard.health}}</p></div>
        </v-card-text>
      </div>
    </div> 
  </v-card>
</template>

<script>
import{mapGetters} from 'vuex'

export default {
  name: "viewCard",
  components: {},
  data: () => ({
    image: '',
    name: '',
    buffs: '',
    attack: '',
    health: ''
  }),
computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getBodyCard'])
  },
  mounted(){

  },
  methods: {
    getCard() {
      this.$store.dispatch("getCard");
    }
  },
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