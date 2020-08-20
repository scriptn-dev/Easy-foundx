<template>
  <div class="container py-5">
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4"
        ><v-card class="text-center pa-7" flat color="white">
          <div class="title-help">
            <span>Precisa de ajuda?</span>
          </div>
          <div class="details-help my-3">
            <span
              >Não achou a resposta que procurava? <br />
              Conta pra gente qual é sua dúvida</span
            >
          </div>
          <v-btn depressed color="black" dark rounded>Acessar Central</v-btn>
        </v-card></v-col
      >
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title-help {
  font-weight: bold;
  font-size: 14px;
  color: #060606;
}
.details-help {
  font-weight: 500;
  font-size: 11px;
  text-align: center;
  color: #0a0a0a;
}
</style>
