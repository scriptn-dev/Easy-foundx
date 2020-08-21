<template>
  <div>
    <div class="text-center title-login white--text my-5">
      <span>Olá,</span> <br />
      <span
        >Para recuperar sua senha, preencha os <br />
        dados abaixo:</span
      >
    </div>
    <v-card class="pa-5">
      <div class="text-center my-4">
        <small>Recupere sua senha aqui</small>
      </div>
      <div class="form-login">
        <div>
          <v-text-field
            dense
            prepend-inner-icon="mdi-email"
            flat
            solo
            label="Email"
            id="id"
          ></v-text-field>
        </div>
        <div>
          <v-btn depressed block color="#E7AE71" class="font-weight-bold"
            >Recuperar conta</v-btn
          >
        </div>
        <div class="my-3">
          <v-btn
            :to="{ name: 'login' }"
            block
            text
            color="#E7AE71"
            class="font-weight-bold"
            >Voltar</v-btn
          >
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
