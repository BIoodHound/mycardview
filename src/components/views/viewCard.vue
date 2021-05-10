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
      :src="card.image"
    ></v-img>

    <v-card-title class="justifiy-content-center">{{this.card.name}}</v-card-title>

    

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
          <div id="ataque"><p class="attack">{{this.attack}}</p></div>

        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
          <div id="vida"><p class="life">{{this.life}}</p></div>
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
  data () {
    return {
      valid: true,
        card :{
      },
      buffsAttach: [
      ],
      life : 0,
      attack : 0
    }
  },
computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getBodyCard'])
  },
  mounted(){
    this.getData();
  },
  methods: {
    getData(){
        if(localStorage.getItem('cardDetail') != null && localStorage.getItem('statusAddBuff') == null ){
          this.logicData();
        }else if(localStorage.getItem('cardDetail') != null && localStorage.getItem('statusAddBuff') != null ){
          this.$store.dispatch("getCard", localStorage.getItem("userId")).then(() => {
          if(localStorage.getItem("cardDetail") != null){
            this.logicData();
          }else{
            this.$swal('Error', 'Error en el servidor', 'error');
          }
        }).catch(error=>{
          console.log(error);
          this.$swal('Error', 'Error en el servidor', 'error');
        })
          
        }
        
    },
    logicData(){
      var card = JSON.parse(localStorage.getItem('cardDetail'));
      this.card = card;
      this.life = card.health;
      this.attack = card.attack;
      if(card.buffs.length > 0){
        this.buffsAttach = card.buffs;
        for (var i= 0; i< card.buffs.length; i++) {
          this.attack += card.buffs[i].attack_buff; 
          this.life += card.buffs[i].hp_buff; 
        }
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
    height: 55px;
    width: 55px;
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