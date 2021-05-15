<template>
<v-app style="
    background-image: url(https://i.pinimg.com/originals/c3/f2/11/c3f211397c11b296344cf74fda828873.gif);
    background-repeat: no-repeat;
    background-size: cover;
">
    <v-spacer></v-spacer>
    <v-main>
    <div class="container mx-auto">
        <div class="d-flex  align-items-center justify-content-center mb-3">

            <div class="col-md-5">
            <div id="carta" class="p-2 bg-info">
                <viewCard class="normal"/>
            </div>
            </div>

            <div class="col-md-4 align-self-baseline">
                <v-img
                height="250"
                src="https://thumbs.gfycat.com/LegalHealthyJaguarundi-size_restricted.gif"
                ></v-img>
            </div>

            <div class="col-md-4">
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