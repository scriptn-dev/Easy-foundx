<template>
  <div>
    <div class="text-center title-login white--text my-5">
      <span>Cadastre-se</span> <br />
      <span
        >Crie uma conta para criar campanhas e <br />
        realizar colaborações!</span
      >
    </div>
    <div>
      <v-card class="pa-5" elevation="3" flat>
        <div class="text-center my-4">
          <small>Cadastre se agora mesmo</small>
        </div>
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

          <div>
            <v-btn block color="#E7AE71" class="font-weight-bold"
              >Cadastrar
            </v-btn>
          </div>
          <div class="my-5">
            <div>
              <small>
                Voce já possui um conta?
              </small>
            </div>
            <div>
              <router-link :to="{ name: 'login' }"
                ><small>Faça o login</small></router-link
              >
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
