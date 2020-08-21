<template>
  <div>
    <v-card flat class="pa-5">
      <div class="form-login">
        <div>
          <v-text-field
            dense
            prepend-inner-icon="mdi-account"
            flat
            solo
            label="Nome"
            id="id"
          ></v-text-field>
        </div>
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
          <v-text-field
            dense
            prepend-inner-icon="mdi-lock"
            flat
            solo
            label="Senha"
            id="id"
          ></v-text-field>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
