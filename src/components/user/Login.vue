<template>
  <div>
    <div class="text-center title-login white--text my-5">
      <span> Bem-vindo(a)! </span> <br />
      <span>Para acessar, preencha os dados abaixo:</span>
    </div>
    <div>
      <v-card class="pa-5" elevation="3" flat>
        <div class="text-center my-4">
          <small>Inicie sessão na sua conta aqui</small>
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
            <v-text-field
              dense
              prepend-inner-icon="mdi-lock"
              flat
              solo
              label="Senha"
              id="id"
            ></v-text-field>
          </div>
          <div class="text-right mb-3">
            <router-link :to="{ name: 'forgot-pass' }">
              <small>Esqueceu a senha?</small></router-link
            >
          </div>
          <div>
            <v-btn
              :to="{ name: 'profile' }"
              block
              color="#E7AE71"
              class="font-weight-bold"
              >Acessar
            </v-btn>
          </div>
          <div class="my-5">
            <div>
              <small>
                Ainda não possui uma conta?
              </small>
            </div>
            <div>
              <router-link :to="{ name: 'register' }"
                ><small>Criar uma conta agora</small></router-link
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
