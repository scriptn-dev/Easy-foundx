<template>
  <div>
    <div>
      <div class="text-left my-3">
        <span class="title-component">Minhas campanhas</span>
      </div>
      <div>
        <v-row>
          <v-col sm="6" cols="12" v-for="item in 5" :key="item">
            <v-card class="pa-5 my-3" flat>
              <v-row>
                <v-col>
                  <div class="details-compaign">
                    <span class="title-compaign-item"
                      >Se você é Fã de Dublagem e amaria conversar com seu
                      dublador favorito, não perca essa ligação!</span
                    >
                    <div class="text-left">
                      <small>27 dias restantes</small>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="auto" sm="3">
                  <v-alert dense border="left" color="black" dark>
                    <div><small>Meta</small></div>
                    <div>
                      <span>R$ 1500,00</span>
                    </div>
                  </v-alert>
                </v-col>
                <v-col sm="3">
                  <v-alert dense border="left" color="#E7AE71">
                    <div><small>Valor arrecado</small></div>
                    <div>
                      <span>R$ 150,00</span>
                    </div>
                  </v-alert>
                </v-col>
                <v-col sm="3">
                  <v-alert outlined dense border="left" color="primary">
                    <div><small>Status</small></div>
                    <div>
                      <span>Em analise</span>
                    </div>
                  </v-alert>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Minha Conta", icon: "mdi-account" },
      { title: "Minhas Campanhas", icon: "mdi-heart" },
      { title: "Precisa ajuda?", icon: "mdi-handshake" },
    ],
  }),
};
</script>

<style>
.title-component {
  font-weight: 600;
  font-size: 15px;
  text-align: left;
  color: black;
}
.title-compaign-item {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  color: #464353;
}
</style>
