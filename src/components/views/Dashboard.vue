<template>
  <v-app style="
    background-image: url(https://www.discordianos.com/uploads/monthly_2020_11/animated-gifs-of-fighting-game-backgrounds-43.gif.604b0391009c5c808d771a905a7c293e.gif);
    background-repeat: no-repeat;
    background-size: cover;
">
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
            <a class="mt-10 ml-15 btn border-danger btn-lg btn-block" role="button" @click="cerrarSession">Cerrar sesión</a>
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
import{mapGetters} from 'vuex'
export default {
  name: 'Dashboard',
  components: {
    viewCard
  },
  computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters([{userId : 'getIdUser'}]),
    
  },
  mounted(){
   
  },
  methods: {
    editCard() {
        this.$store.dispatch("getBufList");
        this.$router.push('principal');
    },
    getUserDetails() {
      this.$store.dispatch("getUserDetails", localStorage.getItem('userId')).then(() => {
          if(localStorage.getItem("userDetail") != null){
            this.$router.push('cuenta');
          }else{
            this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
          }
        }).catch(error=>{
          console.log(error);
          this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
        })
      
    },
    cerrarSession() {
      localStorage.clear();
      this.$router.push('/');
    }
    
  },
}
</script>