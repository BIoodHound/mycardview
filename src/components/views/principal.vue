<template>
        <section>

            <div class="contenedor1"> <!-- IZQUIERDA, TABLA BUFOS -->

                <h1>Lista de bufos</h1><br><br><br><br><br><br><br><br><br>

                <div id="aaa" class="subcontenedor1">

                    <li>
                        <a href="#0">
                        <span>Niebla Negra</span>
                        <span>
                            <i class="fas fa-address-card" aria-hidden="true"></i>
                        </span>
                        </a>
                    </li>

                </div>

                <div class="subcontenedor2">
                    Barriles
                </div>

                <div class="subcontenedor1">
                    Cerveza
                </div>

                <div class="subcontenedor4">
                    Tsunami
                </div>
            </div>

            <div class="contenedor"> <!-- MEDIO, CARTA --> 

                <h1>Carta</h1><br>

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
            </div>

            <div class="contenedor"> <!-- DERECHA -->
                <div class="subcontenedor">
                    
                </div>

                <div class="subcontenedor">
                    
                </div>

                <div class="subcontenedor">
                    
                </div>

                <div class="subcontenedor">
                    
                </div>
            </div>
        </section>
</template>


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

.contenedor1 a span {
  transition: transform 0.2s ease-out;
}
 
.contenedor1 a:hover span:first-child {
  transform: translateY(100%);
}
 
.contenedor1 a:hover span:last-child {
  transform: none;
}

.contenedor1[data-animation="to-top"] a span:last-child {
  transform: translateY(100%);
}
 
.contenedor1[data-animation="to-top"] a:hover span:first-child {
  transform: translateY(-100%);
}
 
.contenedor1[data-animation="to-right"] a span:last-child {
  transform: translateX(-100%);
}
 
.contenedor1[data-animation="to-right"] a:hover span:first-child {
  transform: translateX(100%);
}
 
.contenedor1[data-animation="to-left"] a span:last-child {
  transform: translateX(100%);
}
 
.contenedor1[data-animation="to-left"] a:hover span:first-child {
  transform: translateX(-100%);
}









section .subcontenedor2 {
    flex: 25%;
    border: black 2px solid;
    width: 400px;
    height: 40px;
    margin-left: 40px;
}

section .subcontenedor4 {
    flex: 25%;
    border: black 2px solid;
    width: 400px;
    height: 40px;
    margin-left: 40px;
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