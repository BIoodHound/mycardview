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
      :src="enemy.image"
    ></v-img>

    <v-card-title>{{this.enemy.name}}</v-card-title>

    <v-card-text>
      <div>{{this.enemy.description}}</div>
    </v-card-text>

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
          <div id="ataque"><p class="attack">{{this.enemy.attack}}</p></div>
        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
          <div id="vida"><p class="life">{{this.enemy.health}}</p></div>
        </v-card-text>
      </div>
    </div> 
  </v-card>
</template>

<script>
import{mapGetters} from 'vuex'
export default {
  name: "enemyFight",
  components: {},
  data () {
    return {
      valid: true,
        enemy :{
      },
    }
  },
computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getBodyEnemy'])
  },
  mounted(){
      this.getData();
  },
  methods: {
      getData(){
          if (localStorage.getItem('enemyDetail') != null){
              var enemy = JSON.parse(localStorage.getItem('enemyDetail'));
              this.enemy = enemy;
              localStorage.setItem("enemyId", this.enemy.enemyId);
              console.log(localStorage.getItem("enemyId"));
          }
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