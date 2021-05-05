<template>
    <div class="account justify-content-center">
        <h1 class="title">Account</h1>
        <div>
            <form class="form" method="POST">
                <label class="form-label" for="#name">Nombre</label>
                <input v-model="name" class="form-input" type="text" id="name">
                <label class="form-label" for="#apellido">Apellidos</label>
                <input v-model="lastName" class="form-input" type="text" id="lastName">
                <label class="form-label" for="#email">Email</label>
                <input v-model="email" class="form-input" type="text" id="email">
                <label class="form-label" for="#cambiar">Cambiar contraseña</label>
                <input v-model="password" class="form-input" type="text" id="password">
                <v-btn @click="cancel">Cancelar</v-btn>
                <v-btn color="success" @click="editAccount">Guardar</v-btn>
            </form>
        </div>
        
  </div>
  <!--<v-container class="mx-auto my-15">
    <v-layout justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark flat>
            <v-toolbar-title>Editar cuenta</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
<v-form
              color="deep-purple accent-4"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="name"
                id="name"
                name="name"
                label="name"
                type="text"
                required
              >
              </v-text-field>

              <v-text-field
                v-model="lastName"
                id="lastName"
                label="lastName"
                type="text"
                required
              >
              </v-text-field>

              <v-text-field
                v-model="email"
                id="email"
                label="email"
                type="text"
                required
              >
              </v-text-field>

              <v-text-field
                v-model="password"
                id="password"
                label="password"
                type="password"
                required
              >
              </v-text-field>

              <v-spacer></v-spacer>

              <v-card-actions>
                <v-btn color="success" @click="editAccount">Guardar</v-btn>
                <v-btn color="success" @click="cancel">Cancelar</v-btn>
              </v-card-actions>
            </v-form>
            </v-card-text>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>-->
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
    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    .account {
        margin: auto;
        width: 50%;
        padding: 20px;
    }
</style>