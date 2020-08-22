<template>
  <v-card width="100%" flat rounded="5" @click="displaydetails(campaign.id)">
    <v-img
      aspect-ratio="1.1"
      max-height="120px"
      :src="'https://api.easyfundx.com/images/' + campaign.imagem_capa"
    ></v-img>
    <div class="card-campaign pa-5">
      <div class="title-campaign">
        <span v-text="campaign.titulo"> </span>
      </div>
      <div class="subtitle-campaign">
        <span v-text="campaign.pessoa_nome"> </span>
      </div>

      <v-divider class="mx-4"></v-divider>
      <div class="my-3">
        <span class="value-reached">
          R$ 0 atingidos
        </span>
        <v-progress-linear
          color="#E7AE71"
          height="20px"
          rounded
          :value="campaign.porcentagem"
        >
          <strong v-text="campaign.porcentagem + '%'"></strong
        ></v-progress-linear>
        <div class="text-right">
          <span
            class="card-time-campaign"
            v-text="'iniciada há ' + campaign.dias_ativa + ' dias'"
          >
          </span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    campaign: Object,
  },
  methods: {
    displaydetails(id) {
      this.$router.push({ name: "campaign-details", query: { id: id } });
    },
  },
};
</script>

<style>
.title-campaign {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  text-align: left;
  color: #515151;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
.card-time-campaign {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  color: #8e8e8e;
}
.subtitle-campaign {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  text-align: left;
  color: #515151;
}
.value-reached {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  text-align: left;
  color: #8e8e8e;
}
</style>
