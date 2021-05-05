

<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/illustration-adobe-illustration/ink-drawing/desktop/inkdrawing_P1_900x420.jpg.img.jpg"
    ></v-img>

    <v-card-title>Niebla Negra</v-card-title>

    <v-card-text>
      <div>Añade dos puntos de ataque</div>
    </v-card-text>

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
          <div id="ataque"><p class="attack">2</p></div>
        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
          <div id="vida"><p class="life">0</p></div>
        </v-card-text>
      </div>
    </div> 
  </v-card>
</template>

<style>
  #ataque {
    background-color: rgba(255, 255, 0, 0.507);
    color: black;
    border-block-color: black;
    border-radius: 1000px;
    height: 50px;
    width: 50px;
  }
  #vida {
    background-color: rgba(255, 0, 0, 0.507);
    color: black;
    border-block-color: black;
    border-radius: 0% 50% 50% 50%;
    transform: rotate(45deg);
    height: 50px;
    width: 50px;
  }
  .life {
    transform: rotate(-45deg);
    padding: 15px;
    padding-left: 21px;
  }
  .attack {
    padding: 15px;
    padding-left: 21px;
  }
  #tipo {
    text-align: center;
  }
</style>
