<template>
    <div class="contenedor1"><!-- IZQUIERDA, TABLA BUFOS -->
        <h1>Lista de bufos</h1><br><br><br><br><br><br><br><br><br>
        <div class="subcontenedor1" v-for="item in getBodyBufList" v-bind:key="item">
          {{item.name}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "buffList",
  components: {},
  data: () => ({
    valid: true,
    name: "",
  }),
  computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getBodyBufList'])
  },
  mounted(){

  },
  methods: {},
};
</script>

<style>
  section {
    display: flex;
}

h1{
	text-decoration: underline;
	text-align: center;
}

section .contenedor {
    flex: 33%;
}

section .subcontenedor {
    flex: 25%;
}

section .contenedor1 {
    flex: 33%;
    text-align: center;

}

section .subcontenedor1 {
  flex: 25%;
 	border: black 2px solid;
 	width: 400px;
 	margin-left: 40px;
}

section .subcontenedor2 {
  flex: 25%;
 	border-right: black 2px solid;
 	border-left: black 2px solid;
 	width: 400px;
 	margin-left: 40px;
}

section .subcontenedor4 {
  flex: 25%;
 	border-right: black 2px solid;
 	border-left: black 2px solid;
 	border-bottom: black 2px solid;
 	width: 400px;
 	margin-left: 40px;
}
</style>