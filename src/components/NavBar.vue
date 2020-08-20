<template>
  <v-app-bar dark color="black" app flat id="app-bar">
    <v-btn class="text-capitalize" dense text><b>Easy Fundxs</b></v-btn>
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down" dense>
      <v-btn class="text-capitalize" rounded text large>
        Explorar
      </v-btn>
      <v-btn class="text-capitalize" rounded text large>
        Campanhas
      </v-btn>
      <v-btn class="text-capitalize" rounded text large>
        Contato
      </v-btn>
    </div>
    <div class="hidden-sm-and-down ">
      <v-btn
        class="text-capitalize"
        rounded
        depressed
        dense
        dark
        to="/session"
        color="white"
      >
        <span>
          Iniciar sessão
        </span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
