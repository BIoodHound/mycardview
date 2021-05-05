<template>
<div>
    <div  v-for="(value) in buffs" :key="value.id">
      <a class="mt-10 ml-8 btn border-primary btn-lg btn-block" :id="value.id"  @click="chooseBuff(value.id, value.name)">
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
          for (var i= 0; i< card.buffs.length; i++) {
            //recorrer lista de bufos y comparar con el id de los bufos de la carta (buffs)
            console.log(card.buffs[i].id);
          }
        }
      }
    },
    getData(){
      if(localStorage.getItem('BuffList') != null){
        var buffList = JSON.parse(localStorage.getItem('BuffList'));
        this.buffs = buffList;
      }
    },
    chooseBuff : function(id, name) {
      var req = {
        userId : localStorage.getItem("userId"),
        buffId : id
      }
      console.log(req);
      this.$store.dispatch("getAddBuff", req).then(() => {
        if(localStorage.getItem("statusAddBuff") != null && localStorage.getItem("statusAddBuff") == 200 ){
          this.$router.go();
        }else{
          this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
        }
      }).catch(error=>{
        console.log(error);
        this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
      })


      const buffoChoose = document.createElement('a');
      buffoChoose.className = 'mt-10 ml-8 btn border-success text-success btn-lg btn-block';
      buffoChoose.innerText = name;
      buffoChoose.id = name;
      document.getElementById("chooseBuffs").appendChild(buffoChoose);
      
      const buttonBuff = document.getElementById(id);
      buttonBuff.className = 'mt-10 ml-8 btn border-dark text-dark btn-lg btn-block disabled'

      document.getElementById(name).addEventListener("click", function(){
      buttonBuff.className = 'mt-10 ml-8 btn border-primary text-primary btn-lg btn-block';
      const buffRight = document.getElementById(name);
      buffRight.remove();
      },false);

    },

  },


}
</script>