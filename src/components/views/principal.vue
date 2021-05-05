<template>
<v-app>
    <v-spacer></v-spacer>
    <v-main>
        <div class="container mx-auto">
    
      <div class="d-flex  align-items-center justify-content-around mb-3">

        <div class="col-md-3">
        <h4 class="text-center">Mejoras</h4>
          <div class="row">
            <h4>Mejoras</h4>
            <buffList/>
          </div>
        </div>

        <div class="col-md-5">
          <div class="p-2 bg-info">
            <viewCard/>
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
import{mapGetters} from 'vuex'

export default {
  name: 'principal',
  components: {
    viewCard,
    buffList
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