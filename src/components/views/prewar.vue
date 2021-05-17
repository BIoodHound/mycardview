<template>
<v-app style="
    background-image: url(https://i0.wp.com/www.marcelopedra.com.ar/blog/wp-content/uploads/2013/10/animated-gifs-of-fighting-game-backgrounds-18.gif);
    background-repeat: no-repeat;
    background-size: cover;
    ">
    <v-spacer></v-spacer>
    <v-main>
      <div class="container mx-auto">
        <a href="./Dashboard" class="mt-1 ml-15 btn border-primary btn-lg bg-white mb-8" role="button">Atrás</a>
      
        <div class="d-flex align-items-center justify-content-around mb-3">
          <div class="col-md-5">
            <div class="p-2 bg-info">
              <viewCard/>
            </div>
          </div>

          <div class="col-md-5">
            <div id="enemigo" class="p-2 bg-danger">
              <enemy class="ver"/>
            </div>
          </div>
        </div>
        <div class="row m-0 text-center align-items-center justify-content-center">
          <div class="col-auto">
            <h2 class="p-2 bg-secondary text-white">Elige un enemigo</h2>
            <h5 class="p-1 bg-secondary text-black">Pasa el ratón sobre un enemigo para mostrarlo</h5>
          </div>
        </div>

        <div class="mb-8 col-md-2 align-items-center justify-content-around">
          <div v-for="(value) in enemies" :key="value.enemyId">
              <a class="border border-dark border-0 mt-10 ml-15 btn btn-danger btn-lg btn-inline text-white" style="width: 150px !important;height: 52px !important;" :id="value.enemyId"  @click="chooseEnemy(value.enemyId)" @mouseover="showEnemy(value.enemyId)" @mouseleave="noEnemy()">
              {{ value.name }}
              </a>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import viewCard from './viewCard';
import enemy from './enemy';
export default {
  name: 'prewar',
  components: {
      viewCard,
      enemy
  },
  data () {
    return {
      valid: true,
      enemies :{
      }
    }
  },
  computed:{
    posts(){
      return this.$store.state.posts
    },
  },
  mounted(){
    this.getData();
  },
  methods: {
    getData(){
      if(localStorage.getItem('EnemyList') != null){
        var enemyList = JSON.parse(localStorage.getItem('EnemyList'));
        this.enemies = enemyList;
      }
    },
    showEnemy : function(id) {
      this.$store.dispatch("getEnemy", id).then(() => {
        var enemigo = document.getElementById("enemigo");
        enemigo.getElementsByClassName("ver")[0].style.display = 'inherit';
        
      })
    },
    noEnemy : function() {
      var enemigo = document.getElementById('enemigo');
      enemigo.getElementsByClassName('ver')[0].style.display='none';
    },
    chooseEnemy : function(id) {
        var idEne = id;
        if (idEne != null) {
            this.$store.dispatch("getEnemy", idEne).then(() => {
                if (localStorage.getItem('enemyDetail') != null) {
                    this.$router.push('fight');
                }else{
                    this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
                }
            }).catch(error=>{
                console.log(error);
                this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
            })
        }
    }
  }
}
</script>

<style>
.ver {
  display: none;
}
</style>