<template>
<div>
    <div  v-for="(value) in buffs" :key="value.id">
      <a class="mt-10 ml-8 btn border-primary btn-lg btn-block bg-white" :id="value.id"  @click="chooseBuff(value.id, value.name)" @mouseover="showBuff(value.id)" @mouseleave="noBuff()">
      {{ value.name }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'buffList',
  components: {
  },
  data () {
    return {
      valid: true,
      buffs :{
      },
      card :{
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
    this.checkBuffsSelected();
  },
  methods: {
    checkBuffsSelected(){
      if(localStorage.getItem('cardDetail') != null){
        var card = JSON.parse(localStorage.getItem('cardDetail'));
        this.card = card;
        if(card.buffs.length > 0){
          this.buffsAttach = card.buffs;
          for (var i= 0; i< this.buffs.length; i++){
            for (var j= 0; j< card.buffs.length; j++) {
              if(this.buffs[i].id === card.buffs[j].id){
                this.MarckBuff(this.buffs[i].id, this.buffs[i].name);
              }
            }
          }
        }
      }
    },
    MarckBuff : function(id, name){
      const buffoChoose = document.createElement('a');
      buffoChoose.className = 'mt-10 ml-8 btn border-success text-success btn-lg btn-block bg-white';
      buffoChoose.innerText = name;
      buffoChoose.id = name;
      document.getElementById("chooseBuffs").appendChild(buffoChoose);
      this.$nextTick(() => {            
        const buttonBuff = document.getElementById(id);
        buttonBuff.className = 'mt-10 ml-8 btn border-dark text-dark btn-lg btn-block disabled bg-white';
        document.getElementById(name).addEventListener("click", ()=>{
        this.removeBuff(id, name);
        buttonBuff.className = 'mt-10 ml-8 btn border-primary text-primary btn-lg btn-block bg-white';
       },false);
      });
    },
    removeBuff : function (id, name){
      var req = {
        userId : localStorage.getItem("userId"),
        buffId : id
      }
      console.log(req);
      this.$store.dispatch("getRemoveBuff", req).then(() => {
        if(localStorage.getItem("statusRemoveBuff") != null && localStorage.getItem("statusRemoveBuff") == 200 ){
          const buffRight = document.getElementById(name);
          buffRight.remove();
          this.updateCardData();
        }else{
          this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
        }
      }).catch(error=>{
        console.log(error);
        this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
      })
    },
    getData(){
      if(localStorage.getItem('BuffList') != null){
        var buffList = JSON.parse(localStorage.getItem('BuffList'));
        this.buffs = buffList;
      }
    },
    updateCardData(){
      this.$store.dispatch("getCard", localStorage.getItem("userId")).then(() => {
          if(localStorage.getItem("cardDetail") != null){
            this.$router.go();
          }else{
            this.$swal('Error', 'Error al cargar la carta', 'error');
          }
        }).catch(error=>{
          console.log(error);
          this.$swal('Error', 'Error al cargar la carta', 'error');
      })
    },
    chooseBuff : function(id) {
      var req = {
        userId : localStorage.getItem("userId"),
        buffId : id
      }
      console.log(req);
      this.$store.dispatch("getAddBuff", req).then(() => {
        if(localStorage.getItem("statusAddBuff") != null && localStorage.getItem("statusAddBuff") == 200 ){
          this.updateCardData();
          
        }else{
          this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
        }
      }).catch(error=>{
        console.log(error);
        this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
      })
    },
    showBuff : function(id) {
      this.$store.dispatch("getBuf", id).then(() => {
        var carta = document.getElementById("carta");
        carta.getElementsByClassName("activa")[0].style.display = 'inherit';
        carta.getElementsByClassName("normal")[0].style.display = 'none';
        
      })
    },
    noBuff : function() {
      var carta = document.getElementById('carta');
      carta.getElementsByClassName('normal')[0].style.display='inherit';
      carta.getElementsByClassName('activa')[0].style.display='none';
    }
  },
}
</script>