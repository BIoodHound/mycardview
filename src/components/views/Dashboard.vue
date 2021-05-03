<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
    
    <div class="container">
    
      <div class="d-flex align-items-center justify-content-around mb-3">

        <div class="col-md-6">
          <div class="row ml-16">
            <div>
            <a class="mt-10 ml-15 btn border-primary btn-lg btn-block" role="button" @click="editCard">Editar carta</a>
            <a class="mt-10 ml-15 btn border-primary btn-lg btn-block" role="button">Luchar</a>
            <a class="mt-10 ml-15 btn border-primary btn-lg btn-block" role="button" @click="getUserDetails">Mi cuenta</a>
            </div>
          </div>
          
        </div>

        <div class="col-md-6">
          <div class="p-2 bg-info">
            <viewCard/>
          </div>
        </div>
        
      </div>
    </div>
    </v-main>
  </v-app>
</template>

<script>
import viewCard from './viewCard';

export default {
  name: 'Dashboard',
  components: {
    viewCard
  },
  computed:{
    posts(){
      return this.$store.state.posts
    },

    
  },
  mounted(){

  },
  methods: {
    editCard() {
        this.$store.dispatch("getBufList");
        this.$router.push('principal')
    },
    getUserDetails() {
      this.$store.dispatch("getUserDetails");
      this.$router.push('cuenta')
    }
  },
}
</script>