<template>
  <div class="">
    <div class="subheader pb-3">
      <span
        >Categoria
        <v-icon color="464353" size="10">mdi-circle</v-icon> Artes</span
      >
    </div>
    <v-card flat class="pa-5">
      <v-row>
        <v-col>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
          </v-img>
          <div class="grey lighten-5 px-5">
            <v-row align="center" justify="start">
              <v-col cols="auto"
                ><div><span>COMPARTILHAR</span></div></v-col
              >
              <v-col cols="auto"
                ><v-btn small fab color="primary" dark>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn></v-col
              >

              <v-col cols="auto"
                ><v-btn small fab color="success" dark>
                  <v-icon>mdi-whatsapp</v-icon>
                </v-btn></v-col
              >
              <v-col cols="auto"
                ><v-btn small fab color="success" dark>
                  <v-icon>mdi-content-copy</v-icon>
                </v-btn></v-col
              >
            </v-row>
            <div class="my-2">
              <v-btn large rounded block color="primary"
                ><b>Colaborar</b></v-btn
              >
            </div>
          </div>
        </v-col>
        <v-col sm="6">
          <div class="details-compaign">
            <span class="title-compaign"
              >Se você é Fã de Dublagem e amaria conversar com seu dublador
              favorito, não perca essa ligação!</span
            >
            <div class="text-left">
              <small>27 dias restantes</small>
            </div>
          </div>
          <v-row>
            <v-col cols="auto" sm="4">
              <v-alert border="left" color="black" dark>
                <div><small>Meta</small></div>
                <div class="pb-5">
                  <span>R$ 1500,00</span>
                </div>
              </v-alert>
            </v-col>
            <v-col sm="8">
              <v-alert border="left" color="#E7AE71">
                <div><small>Arrecadados</small></div>
                <div>
                  <span>R$ 150,00</span>
                </div>
                <v-progress-linear
                  color="black"
                  height="20px"
                  rounded
                  value="15"
                >
                  <strong>15%</strong></v-progress-linear
                >
              </v-alert>
            </v-col>
          </v-row>

          <div class="about-compaign">
            <div class="header font-weight-bold">
              <span>Sobre o Projeto</span>
            </div>
            <div class="compaign-description">
              <span
                >O mercado da dublagem sofreu e vem sofrendo muito com o momento
                atual da pandemia, causada pelo COVID-19. Nossos trabalhos foram
                paralisados, pois é extremamente arriscado trabalhar dentro de
                um estúdio fechado, sem janelas, onde circulam centenas de
                pessoas, entre dubladores, técnicos e outros prestadores de
                serviço. Em um levantamento feito, 72,3% dos dubladores se
                consideram do grupo de risco ou vivem com alguém que seja.</span
              >
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title-compaign {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  text-align: left;
  color: #464353;
}
</style>
