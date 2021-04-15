<template>
        <section>

            <div class="contenedor1"> <!-- IZQUIERDA, TABLA BUFOS -->

                <h1>Lista de bufos</h1><br><br><br><br><br><br><br><br><br>

                <div id="aaa" class="subcontenedor1">
                    <!--<a href="#">
                        Niebla negra
                        <img src="./imagenes/bufo1.png">
                    </a>-->
                    Niebla negra
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