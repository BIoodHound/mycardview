<template>
    <v-app>
    <v-spacer></v-spacer>
        <v-main>
            <div class="contenedor1"> <!-- IZQUIERDA, TABLA BUFOS -->
                <buffList/>
            </div>
            <div class="contenedor"> <!-- MEDIO, CARTA --> 
                <viewCard/>
                <bufo/>
            </div>
            <div class="contenedor"> <!-- DERECHA -->
            </div>
        </v-main>
    </v-app>
</template>

<script>
import buffList from './buffList';
import bufo from './bufo';
import viewCard from './viewCard';

export default {
  name: 'principal',

  components: {
    buffList,
    bufo,
    viewCard,
  }
}
</script>

<style>
  section {
    display: flex;
}

h1{
	text-decoration: underline;
	text-align: center;
}

section .contenedor {
    flex: 33%;
}

section .subcontenedor {
    flex: 25%;
}

section .subcontenedor1 {
    flex: 25%;
    border: black 2px solid;
    width: 400px;
    height: 40px;
    margin-left: 40px;
    text-align: center;
}

.contenedor1 a {
  display: block;
  position: relative;
  overflow: hidden;
}

.contenedor1 {
  justify-content: center;
}

.contenedor1 a span:first-child {
  display: inline-block;
  padding: 10px;
}
 
.contenedor1 a span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
}

section .contenedor1 {
    flex: 33%;
    text-align: center;

}

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