<template>
<div>
    <div  v-for="(value) in getBodyBufList" :key="value.id">
      <a class="mt-10 ml-8 btn border-primary btn-lg btn-block bg-white" :id="value.id"  @click="chooseBuff(value.id, value.name)">
      {{ value.name }}
      </a>
    </div>
  </div>
</template>
<script>

import{mapGetters} from 'vuex'
export default {
  name: 'buffList',
  components: {
  },
  data: () => ({
    valid: true,
    nombre: "",
  }),
  computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getBodyBufList'])
  },
  mounted(){
  },
  methods: {
    chooseBuff : function(id, name) {
      var req = {
        userId : "1",
        buffId : id
      }
      this.$store.dispatch("getAddBuff", req)
      console.log(name)
      const buffoChoose = document.createElement('a');
      buffoChoose.className = 'mt-10 ml-8 btn border-success text-success btn-lg btn-block bg-white';
      buffoChoose.innerText = name;
      buffoChoose.id = name;
      document.getElementById("chooseBuffs").appendChild(buffoChoose);
      
      const buttonBuff = document.getElementById(id);
      buttonBuff.className = 'mt-10 ml-8 btn border-dark text-dark btn-lg btn-block bg-white disabled';
      document.getElementById(name).addEventListener("click", function(){
      buttonBuff.className = 'mt-10 ml-8 btn border-primary text-primary btn-lg btn-block bg-white';
      const buffRight = document.getElementById(name);
      buffRight.remove();
      },false);

    },

  },


}
</script>