<template>
  <v-container class="mx-auto my-15">
      <v-layout justify-center>
        <v-flex md8>
          <v-card>
            <v-toolbar dark flat>
              <v-toolbar-title>Editar Cuenta</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div class="account justify-content-center">
                  <div>
                      <form class="form" method="POST">
                          <label class="form-label" for="#name">Nombre</label>
                          <input v-model="name" class="form-input" type="text" id="name">
                          <label class="form-label" for="#apellido">Apellidos</label>
                          <input v-model="lastName" class="form-input" type="text" id="lastName">
                          <label class="form-label" for="#email">Email</label>
                          <input v-model="email" class="form-input" type="text" id="email">
                          <label class="form-label" for="#cambiar">Cambiar contraseña</label>
                          <input v-model="password" class="form-input" type="password" id="password">
                          <div style="margin-top: 10px;">
                            <v-btn @click="cancel" class="mr-5">Cancelar</v-btn>
                            <v-btn color="success" @click="editAccount">Guardar</v-btn>
                          </div>
                      </form>
                  </div>
              </div>
            </v-card-text>
            
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import{mapGetters} from 'vuex'
export default {
  name: "accountView",
  components: {},
  data () {
    return {
      valid: true,
        username: '',
        name: '',
        lastName: '',
        email: '',
        password: ''
    }
  },
  created(){
     
  },
computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getUser'])
  },
  mounted(){
    this.getUserdata()
  },
  methods: {
    getUserdata(){
      if(localStorage.getItem('userDetail') != null){
        var user = JSON.parse(localStorage.getItem('userDetail'));
        this.username = user.username;
        this.name = user.name;
        this.lastName = user.lastName;
        this.email = user.email;
      } 
    },
    editAccount() {
      if(this.password === ''){
        var user = JSON.parse(localStorage.getItem('userDetail'));
        this.password = user.password;
      }
        var req = {
          username : this.username,
          name : this.name,
          lastName : this.lastName,
          email : this.email,
          password : this.password
        }
        this.$store.dispatch("getEditUser", req).then(() => {
          if(localStorage.getItem("statusEdit") != null && localStorage.getItem("statusEdit") == 200){
            this.$swal('Correcto', 'Cuenta editada correctamente', 'success');
            this.$router.push('dashboard');
          }else{
            this.$swal('Error', 'Error al editar la cuenta', 'error');
          }
        }).catch(error=>{
          console.log(error);
          this.$swal('Error', 'Error al editar la cuenta', 'error');
        })
    },

    cancel(){
      this.$router.push('dashboard')
    }
  },
};
</script>

<style>
    input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
</style>