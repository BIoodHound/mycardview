<template>
<v-app style="
    background-image: url(https://i0.wp.com/www.marcelopedra.com.ar/blog/wp-content/uploads/2013/10/animated-gifs-of-fighting-game-backgrounds-18.gif);
    background-repeat: no-repeat;
    background-size: cover;
    ">
    <v-spacer></v-spacer>
    <v-main>
    <a href="./prewar" class="mt-7 col-md-0 offset-md-2 btn border-primary btn-lg bg-white mb-8" role="button" style="
    margin-left: 276px;
">Atrás</a>
        
    <div class="container mx-auto">
    
        <div class="d-flex  align-items-center justify-content-center mb-3">

            <div class="col-md-5">
            <div id="carta" class="p-2 bg-info">
                <viewCard class="normal"/>
            </div>
            </div>

            <div class="col-md-5 align-self-center">
                <v-img
                height="250"
                src="https://thumbs.gfycat.com/LegalHealthyJaguarundi-size_restricted.gif"
                ></v-img>
            </div>

            <div class="col-md-5">
              <div class="p-2 bg-danger">
                <enemyFight class="normal"/>
              </div>
            </div>

        </div>
        
    </div>

    <div class="row m-0 text-center align-items-center justify-content-center">
        <div class="col-auto">
        <h3 id="logs"></h3>
        </div>
    </div>

    <div class="row m-0 text-center align-items-center justify-content-center">
        <div class="col-auto">
          <a class="mt-15 mb-10 btn btn-info btn-lg  btn-inline text-white" role="button" @click="fightStart" style="width: 207px !important;height: 52px !important;" id="buttonFight">LUCHAR</a>
        </div>
    </div>
    
    
    </v-main>
  </v-app>
</template>

<script>
import enemyFight from './enemyFight';
import viewCard from './viewCard';
export default {
  name: 'fight',
  components: {
    viewCard,
    enemyFight
  },
  data () {
    return {
      valid: true,
        res :{
      },
      combatLog: [

      ],
    }
  },
computed:{
    posts(){
      return this.$store.state.posts
    },
  },
  mounted(){
  },
  methods: {
    fightStart(){
      var req = {
        userId : localStorage.getItem("userId"),
        enemyId : localStorage.getItem("enemyId")
      }
      this.$store.dispatch("getCombatResult", req).then(() => {
        if(localStorage.getItem("resultCombat") != null ){
          console.log("en el combate");
          const buttonEnemy = document.getElementById("buttonFight");
          buttonEnemy.className = 'mt-15 mb-10 btn btn-danger btn-lg text-white bg-danger disabled';
          buttonEnemy.innerText = "LUCHANDO..."
          this.logicFight()
          this.messageResult()
        }else{
          this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
        }
      }).catch(error=>{
        console.log(error);
        this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
      })
    },
    logicFight (){
      var result =  JSON.parse(localStorage.getItem('resultCombat'));
      this.res = result;
      this.combatLog = result.combatLogList;
      console.log(this.combatLog);
      var i = 0;
      var lengthLog = this.combatLog.length;
      this.myLoop(i, lengthLog);
    },
    myLoop: function(i, length){
         setTimeout(() => {   
          const log = document.getElementById("logs");
          if(this.combatLog[i].state === "player"){
            log.className = "p-2 bg-info text-white";
            log.innerText = this.combatLog[i].log; 
          }else{
            log.className = "p-2 bg-danger text-white";
            log.innerText = this.combatLog[i].log; 
          }
        i++;                   
        if (i < length) {           
          this.myLoop(i, length);             
        }else{
            const buttonFinish = document.getElementById("buttonFight");
            buttonFinish.className = 'mt-15 mb-10 btn btn-danger btn-lg text-white bg-danger disabled';
            buttonFinish.innerText = "LUCHA FINALIZADA"
            if(this.res.result === "Victory"){
              this.$swal.fire({
                title: '¡¡HAS GANADO !!',
                text: '¡Eres un máquina, sigue así!',
                imageUrl: 'https://i.pinimg.com/originals/3e/08/9a/3e089a246769795d9d8a1810a155fa83.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
              .then(() => {
                this.$router.push('dashboard');
              });

            }else{
              this.$swal.fire({
                title: '¡OH! Has perdido :(',
                text: 'Inténtalo otra vez o mejora tu carta',
                imageUrl: 'https://media.tenor.com/images/85584a1b677128233240d45d4a272310/tenor.gif',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
              .then(() => {
                this.$router.push('dashboard');
              });
              
                
            }  
        }                      
      }, 3000)
      
    },
    messageResult(){
      
    }
  }
};
</script>

<style>
  section {
    display: flex;
}
section .contenedor1 {
    flex: 33%;
}
section .contenedor2 {
    flex: 33%;
}
section .contenedor3 {
    flex: 33%;
}
.contenedor1 {
  justify-content: center;
}
section .contenedor1 {
    flex: 33%;
    text-align: center;
}
.contenedor2 {
  justify-content: center;
}
section .contenedor2 {
    flex: 33%;
    text-align: center;
}
.contenedor2 {
  justify-content: center;
}
section .contenedor3 {
    flex: 33%;
    text-align: center;
}.contenedor3 {
  justify-content: center;
}
section .contenedor3 {
    flex: 33%;
    text-align: center;
}
.ver {
  display: none;
}
</style> 