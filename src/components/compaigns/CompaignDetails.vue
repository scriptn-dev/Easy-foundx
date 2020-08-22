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
        <v-col cols="12" sm="6">
          <v-img
            :src="'https://api.easyfundx.com/images/' + campaign.imagem_capa"
          >
          </v-img>
          <div class="grey lighten-5 px-5">
            <v-row align="center" justify="start">
              <v-col cols="auto"
                ><div><span>COMPARTILHAR</span></div></v-col
              >
              <v-col cols="auto"
                ><v-btn small fab color="primary" dark>
                  <ShareNetwork
                    network="facebook"
                    :url="'https://easyfundx.com' + this.$route.fullPath"
                    title="Olá, você poderia compartilhar ou contribuir com um valor para esta campanha?"
                    description="Nos ajude compartilhando essa campanha"
                    quote="Olá, você poderia compartilhar ou contribuir com um valor para esta campanha?"
                    hashtags="easyfundx"
                  >
                    <v-icon color="white">mdi-facebook</v-icon>
                  </ShareNetwork>
                </v-btn></v-col
              >

              <v-col cols="auto"
                ><v-btn small fab color="success" dark>
                  <ShareNetwork
                    network="whatsapp"
                    :url="'https://easyfundx.com' + this.$route.fullPath"
                    title="Olá, você poderia compartilhar ou contribuir com um valor para esta campanha?"
                    description="Nos ajude compartilhando essa campanha"
                    quote="Olá, você poderia compartilhar ou contribuir com um valor para esta campanha?"
                    hashtags="easyfundx"
                  >
                    <v-icon color="white">mdi-whatsapp</v-icon>
                  </ShareNetwork>
                </v-btn></v-col
              >
              <v-col cols="auto"
                ><v-btn @click="copyLink()" small fab color="#E7AE71">
                  <v-icon color="white">mdi-content-copy</v-icon>
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
            <span class="title-compaign" v-text="campaign.titulo"></span>
            <div class="text-left">
              <small
                v-text="campaign.dias_restantes + ' dias restantes'"
              ></small>
            </div>
          </div>
          <v-row>
            <v-col cols="auto" sm="4">
              <v-alert border="left" color="black" dark>
                <div><small>Meta</small></div>
                <div class="pb-5">
                  <span v-text="convertMoney(campaign.valor)"></span>
                </div>
              </v-alert>
            </v-col>
            <v-col sm="8">
              <v-alert border="left" color="#E7AE71">
                <div><small>Arrecadados</small></div>
                <div>
                  <span v-text="campaign.valor_arrecadado">R$ 150,00</span>
                </div>
                <v-progress-linear
                  color="black"
                  height="20px"
                  rounded
                  value="15"
                >
                  <strong v-text="campaign.porcentagem + ' %'"
                    >%</strong
                  ></v-progress-linear
                >
              </v-alert>
            </v-col>
          </v-row>

          <div class="about-compaign">
            <div class="header font-weight-bold">
              <span>Sobre o Projeto</span>
            </div>
            <div class="compaign-description">
              <span v-text="description"></span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import CampaignService from "@/services/campaign/CampaignService";
var sanitizeHtml = require("sanitize-html");

export default {
  data: () => ({
    id: "",
    campaign: [],
    colaborations: [],
    description: "",
    show: false,
    copyText: "",
    msgCopy: "",
  }),
  mounted() {
    this.id = this.$route.query.id;
    this.copyText = "https://easyfundx.com" + this.$route.fullPath;
    CampaignService.listCampaign(this.id).then((response) => {
      this.campaign = response.data[0];
      this.description = sanitizeHtml(response.data[0].descricao, {
        allowedTags: [],
      });
    });

    CampaignService.listColaborations(this.id).then((response) => {
      this.colaborations = response.data;
    });
  },
  methods: {
    convertMoney(money) {
      const toCurrency = (n, curr, LanguageFormat = undefined) =>
        Intl.NumberFormat(LanguageFormat, {
          style: "currency",
          currency: curr,
        }).format(n);
      return toCurrency(money, "BRL");
    },
    copyLink() {
      let link = this.copyText;
      console.log(link);
      this.$clipboard(link);
    },
  },
};
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
