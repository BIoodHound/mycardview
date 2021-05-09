<template>
<v-app style="
    background-image: url(https://i.pinimg.com/originals/c3/f2/11/c3f211397c11b296344cf74fda828873.gif);
    background-repeat: no-repeat;
    background-size: cover;
">
    <v-spacer></v-spacer>
    <v-main>
        <div class="container mx-auto">
    
      <div class="d-flex  align-items-center justify-content-around mb-3">

        <div class="col-md-3">
        <h4 class="text-center">Mejoras</h4>
          <div class="row">
            <buffList/>
          </div>
        </div>

        <div class="col-md-5">
          <div id="carta" class="p-2 bg-info">
            <buffo class="activa"/>
            <viewCard class="normal"/>
          </div>
        </div>

        <div class="col-md-3">
        <h4 class="text-center">Mejoras Elegidas</h4>
          <div class="row" id="chooseBuffs">
          </div>
        </div>

      </div>
    </div>

            
    </v-main>
  </v-app>
</template>

<script>
import viewCard from './viewCard';
import buffList from './buffList';
import buffo from './buffo';
import{mapGetters} from 'vuex'
export default {
  name: 'principal',
  components: {
    viewCard,
    buffList,
    buffo
  },
  data: () => ({
  }),
  computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters([''])
  },
  mounted(){
  },
  methods: {
    
  },
}
</script>

<style>
.activa {
  display: none;
}
</style>