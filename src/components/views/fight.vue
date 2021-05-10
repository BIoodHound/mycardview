<template>
    <v-app>
    <v-spacer></v-spacer>
        <v-main>
            <div class="contenedor1"> <!-- IZQUIERDA, CARTA -->
                <viewCard/>
            </div>
            <div class="contenedor2"> <!-- MEDIO, CARTA --> 
                <img class="media" src="/imagen/vs.PNG">
            </div>
            <div class="contenedor3"> <!-- DERECHA -->
                
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