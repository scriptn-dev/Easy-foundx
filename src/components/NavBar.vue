<template>
  <v-app-bar dark color="black" dense app flat id="app-bar">
    <v-btn to="/" class="text-capitalize" dense text><b>Easy Fundxs</b></v-btn>
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down" small>
      <v-btn
        :to="{ name: 'compaigns' }"
        class="text-capitalize"
        rounded
        text
        small
      >
        Explorar
      </v-btn>
      <v-btn
        class="text-capitalize"
        :to="{ name: 'create-compaign' }"
        rounded
        text
        small
      >
        Criar Campanha
      </v-btn>
      <v-btn class="text-capitalize" rounded text small>
        Contato
      </v-btn>
    </div>
    <div class="hidden-sm-and-down ">
      <v-btn
        class="text-capitalize"
        rounded
        depressed
        small
        dark
        :to="{ name: 'session' }"
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
