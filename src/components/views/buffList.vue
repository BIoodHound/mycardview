<template>
  <section>
    <div class="contenedor1">

        <h1>Lista de bufos</h1><br>

        <div class="subcontenedor1">
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

    <div class="contenedor">

        <h1>Carta</h1><br>

        <div class="subcontenedor">
            
         </div>

         <div class="subcontenedor">
            
         </div>

         <div class="subcontenedor">
            
         </div>

         <div class="subcontenedor">
            
         </div>
    </div>

    <div class="contenedor">
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

section .contenedor1 {
    flex: 33%;
    text-align: center;

}

section .subcontenedor1 {
  flex: 25%;
 	border: black 2px solid;
 	width: 400px;
 	margin-left: 40px;
}

section .subcontenedor2 {
  flex: 25%;
 	border-right: black 2px solid;
 	border-left: black 2px solid;
 	width: 400px;
 	margin-left: 40px;
}

section .subcontenedor4 {
  flex: 25%;
 	border-right: black 2px solid;
 	border-left: black 2px solid;
 	border-bottom: black 2px solid;
 	width: 400px;
 	margin-left: 40px;
}
</style>