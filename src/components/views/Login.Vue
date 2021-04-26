<template>
  <v-container class="mx-auto my-15">
    <v-layout justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-toolbar dark flat>
            <v-toolbar-title>Login Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
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
                label="Usename"
                type="text"
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
                <v-btn color="success" @click="validate">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data: () => ({
    valid: true,
    username: "",
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
          password : this.password
        }
        this.$store.dispatch("getUserLogin", req);
      }
    }
  },
};
</script>

<style>
</style>