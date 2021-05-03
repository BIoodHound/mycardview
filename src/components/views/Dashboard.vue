<template>
  <v-app>
    <v-spacer></v-spacer>
    <v-main>
    
    <div class="container">
    
      <div class="d-flex  align-items-center justify-content-around mb-3">

        <div class="col-md-6">
          <div class="row ml-16">
            <div>
            <a class="mt-10 ml-15 btn border-primary btn-lg btn-block" href="#" role="button">Editar carta</a>
            <a class="mt-10 ml-15 btn border-primary btn-lg btn-block" href="#" role="button">Luchar</a>
            <a class="mt-10 ml-15 btn border-primary btn-lg btn-block" href="#" role="button">Mi cuenta</a>
            </div>
          </div>
          
        </div>

        <div class="col-md-6">
          <div class="p-2 bg-info">
            <viewCard/>
          </div>
        </div>
        
      </div>
    </div>
    </v-main>
  </v-app>
</template>

<script>
import viewCard from './viewCard';

export default {
  name: 'Dashboard',
  components: {
    viewCard
  }
}
</script>