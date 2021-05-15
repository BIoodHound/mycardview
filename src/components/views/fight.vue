<template>
<v-app style="
    background-image: url(https://i0.wp.com/www.marcelopedra.com.ar/blog/wp-content/uploads/2013/10/animated-gifs-of-fighting-game-backgrounds-18.gif);
    background-repeat: no-repeat;
    background-size: cover;
">
    <v-spacer></v-spacer>
    <v-main>
        <div class="container mx-auto">

          <a href="./Dashboard" class="mt-1 ml-15 btn border-primary btn-lg btn-block bg-white" role="button">Atrás</a>
    
      <div class="d-flex  align-items-center justify-content-around mb-3">

        <div class="col-md-5">
            <viewCard/>
        </div>

        <div class="col-md-5">
            <v-img
            height="250"
            src="./iamgen/vs.png"
            ></v-img>
        </div>

        <div class="col-md-5">
          <!-- CARTA ENEMIGA -->
        </div>

      </div>
    </div>  
    </v-main>
  </v-app>
</template>

<script>

import viewCard from './viewCard';

export default {
  name: 'fight',

  components: {
    viewCard,
  }
}
</script>

<style>
  section {
    display: flex;
}

section .contenedor1 {
    flex: 33%;
}
section .contenedor2 {
    flex: 33%;
}
section .contenedor3 {
    flex: 33%;
}
.contenedor1 {
  justify-content: center;
}

section .contenedor1 {
    flex: 33%;
    text-align: center;

}
.contenedor2 {
  justify-content: center;
}
section .contenedor2 {
    flex: 33%;
    text-align: center;

}
.contenedor2 {
  justify-content: center;
}

section .contenedor3 {
    flex: 33%;
    text-align: center;

}.contenedor3 {
  justify-content: center;
}

section .contenedor3 {
    flex: 33%;
    text-align: center;

}
</style> 