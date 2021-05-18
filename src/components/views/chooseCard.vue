<template>
    <div>
        <div v-for="(value) in cards" :key="value.name" class="col-4 d-inline-block">
            <v-card
                class="mx-auto my-12"
                max-width="374" 
            >
                <v-img
                height="400"
                :src="value.image"
                ></v-img>

                <v-card-title class="justifiy-content-center">{{value.name}}</v-card-title>

                <div class="row justify-content-center mx-0">
                <div class="col-4">
                    <v-card-title>Attack</v-card-title>

                    <v-card-text>
                    <div id="ataque"><p class="attack">{{value.attack}}</p></div>

                    </v-card-text>
                </div>
                
                <div class="col-4">
                </div>

                <div class="col-4">
                    <v-card-title>Life</v-card-title>

                    <v-card-text>
                    <div id="vida"><p class="life">{{value.health}}</p></div>
                    </v-card-text>
                </div>
                </div> 
            </v-card>
            <a class="border border-dark border-0 ml-25 mt-10 btn btn-danger btn-lg text-white" style="width: 170px !important;margin-left: 205px !important;" :id="value.name" @click="chooseCard(value.name)">
              {{ value.name }}
            </a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'chooseCard',
  components: {
  },
  data () {
    return {
      valid: true,
      cards :[

      ]
    }
  },
  computed:{
    posts(){
      return this.$store.state.posts
    },
  },
  mounted(){
    this.getData();
  },
  methods: {
    getData(){
      if(localStorage.getItem('CardList') != null){
        var cardList = JSON.parse(localStorage.getItem('CardList'));
        this.cards = cardList;
      }
    },
    chooseCard : function(id) {
        var idCard = id;
        var req = {
          userId : localStorage.getItem("userId"),
          cardName : idCard
        }
        console.log(idCard);
        if (idCard != null) {
            this.$store.dispatch("setMyCard", req).then(() => {
                if (localStorage.getItem('myCardDetail') != null) {
                  this.$store.dispatch("getCard", localStorage.getItem("userId")).then(() => {
                    if(localStorage.getItem("cardDetail") != null){
                      this.$router.push('dashboard');
                    }else{
                      this.$swal('Error', 'Error al editar la cuenta', 'error');
                    }
                  }).catch(error=>{
                    console.log(error);
                    this.$swal('Error', 'Error al editar la cuenta', 'error');
                  })
                
                }else{
                    this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
                }
            }).catch(error=>{
                console.log(error);
                this.$swal('Error', 'ERROR EN EL SERVIDOR', 'error');
            })
        }
    }
  }
}
</script>