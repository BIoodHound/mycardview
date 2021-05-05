<template>
    <div class="account justify-content-center">
        <h1 class="title">Account</h1>
        <div>
            <form class="form" method="POST">
                <input class="form-input" type="hidden" id="username" :value="getUser.username">
                <label class="form-label" for="#name">Nombre</label>
                <input class="form-input" type="text" id="name" :value="getUser.name">
                <label class="form-label" for="#apellido">Apellidos</label>
                <input class="form-input" type="text" id="lastName" :value="getUser.lastName">
                <label class="form-label" for="#email">Email</label>
                <input class="form-input" type="text" id="email" :value="getUser.email">
                <label class="form-label" for="#cambiar">Cambiar contraseña</label>
                <input class="form-input" type="text" id="password">
                <v-btn @click="cancel">Cancelar</v-btn>
                <v-btn color="success" @click="editAccount">Guardar</v-btn>
            </form>
        </div>
        
  </div>
</template>

<script>
import{mapGetters} from 'vuex'

export default {
  name: "accountView",
  components: {},
  data: () => ({
    username: "",
    name: "",
    lastName: "",
    email: "",
    password: ""
  }),
computed:{
    posts(){
      return this.$store.state.posts
    },
    ...mapGetters(['getUser'])
  },
  mounted(){

  },
  methods: {
    editAccount() {
      if (this.$refs.form.editAccount()) {
        var req = {
          username : this.username,
          name : this.name,
          lastName : this.lastName,
          email : this.email,
          password : this.password
        }
        this.$store.dispatch("getEditUser", req);
      }
    },

    cancel() {
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