<template>
  <v-card width="100%" flat rounded="5" color="#F5F5F5" :loading="loading">
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <div class="card-compaign pa-5">
      <div class="title-compaign">
        <span>
          Feira de ciências
        </span>
      </div>
      <div class="subtitle-compaign">
        <span>por Brunoid, o Implicante</span>
      </div>

      <v-divider class="mx-4"></v-divider>
      <div class="my-3">
        <span class="value-reached">
          R$ 0 atingidos
        </span>
        <v-progress-linear color="#E7AE71" height="20px" rounded value="15">
          <strong>15%</strong></v-progress-linear
        >
        <div class="text-right">
          <span class="card-time-compaign">iniciado há 13 dias </span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.title-compaign {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 13px;
  text-align: left;
  color: #515151;
}
.card-time-compaign {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  color: #8e8e8e;
}
.subtitle-compaign {
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
