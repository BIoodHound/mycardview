<template>
  <v-card
    :loading="loading"
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
      src="https://ep01.epimg.net/elpais/imagenes/2017/01/12/estilo/1484241837_708451_1484244419_noticia_normal_recorte1.jpg"
    ></v-img>

    <v-card-title>Rey Badílico</v-card-title>

    <v-card-text>
      <div>Descripción se trae de la ddbb</div>
    </v-card-text>

    <div class="row justify-content-center mx-0">
      <div class="col-4">
        <v-card-title>Attack</v-card-title>

        <v-card-text>
          <div id="ataque"><p class="attack">9</p></div>
        </v-card-text>
      </div>
      
      <div class="col-4">
      </div>

      <div class="col-4">
        <v-card-title>Life</v-card-title>

        <v-card-text>
          <div id="vida"><p class="life">9</p></div>
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