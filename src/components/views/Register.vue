<template>
  <v-container class="mx-auto my-15">
    <v-layout justify-center>
      <v-flex xs12 sm8 md4>
        <!-- login view -->
        <v-card>
          <v-toolbar dark flat>
            <v-toolbar-title>Register Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <!-- login form -->
            <v-form
              color="deep-purple accent-4"
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-text-field
                v-model="username"
                id="username"
                name="username"
                label="Nombre de usuario"
                type="text"
                required
              >
              </v-text-field>

              <v-text-field
                v-model="name"
                id="name"
                name="name"
                label="Nombre"
                type="text"
                required
              >
              </v-text-field>

              <v-text-field
                v-model="lastName"
                id="lastName"
                name="lastName"
                label="Apellidos"
                type="text"
                required
              >
              </v-text-field>

              <v-text-field
                v-model="email"
                id="email"
                name="email"
                label="Email"
                type="email"
                required
              >
              </v-text-field>

              <v-text-field
                v-model="password"
                id="password"
                label="Password"
                type="password"
                counter="10"
                required
              >
              </v-text-field>

              <v-spacer></v-spacer>

              <v-card-actions>
                <v-btn color="success" @click="validate">Register</v-btn>
              </v-card-actions>
            </v-form>
            <!-- login form -->
          </v-card-text>
        </v-card>
        <!-- end login view -->
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>

import{mapGetters} from 'vuex'

export default {
  name: "Register",
  components: {},
  data: () => ({
    valid: true,
    username: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
  }),
  computed:{
    posts(){
      return this.$store.state.posts
    },

    ...mapGetters(['getUser','getName', 'getUsername', 'getLastname','getEmail'])
    
  },
  mounted(){

  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        var req = {
          username : this.username,
          name : this.name,
          lastName : this.lastName,
          email : this.email,
          password : this.password
        }
        this.$store.dispatch("getUserRegister", req);
      }
    }
  },
};
</script>