<template>
  <div class="grey lighten-5 ">
    <v-container class="py-8">
      <v-row justify="center">
        <v-col sm="6" md="6">
          <div class="form-create-compaign">
            <div class="subheader pb-3">
              <span>Criar campanha</span>
            </div>
            <div class="form">
              <v-row>
                <v-col sm="6">
                  <small>Escreva um titulo</small>
                  <div>
                    <v-text-field
                      flat
                      solo
                      label="Ex: Campanha para ajudar cães de rua"
                      id="id"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col sm="6">
                  <div>
                    <small>Escolha a categoria</small>
                    <v-select
                      solo
                      flat
                      :items="categories"
                      v-model="value"
                      item-text="title"
                      label="Selecione"
                    ></v-select>
                  </div>
                </v-col>
              </v-row>
              <div>
                <small>Escreva sobre essa campanha</small>
                <v-textarea
                  solo
                  flat
                  name="input-7-4"
                  label="Ex: Essa campanha tem o objetivo de..."
                ></v-textarea>
              </div>
              <div>
                <v-row>
                  <v-col cols="12" sm="6">
                    <small>Adicione um video</small>
                    <v-text-field
                      flat
                      solo
                      prepend-icon="mdi-video"
                      label="URL do video no YouTube"
                      id="id"
                    ></v-text-field
                  ></v-col>
                  <v-col cols="12" sm="6">
                    <small>Adicione uma imagem</small>
                    <v-file-input
                      solo
                      flat
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder="Escolha a imagem"
                      prepend-icon="mdi-camera"
                      label="Imagem"
                    ></v-file-input>
                  </v-col>
                </v-row>
                <div>
                  <small>Quanto você deseja arrecadar nessa campanha?</small>
                  <v-text-field
                    flat
                    solo
                    v-model="valueCompaign"
                    id="id"
                  ></v-text-field>
                </div>
                <div>
                  <small>Qual o prazo da campanha?</small>
                  <v-text-field
                    flat
                    solo
                    messages="Minimo de 10 e máximo de 90 dias"
                    type="number"
                    id="id"
                  ></v-text-field>
                </div>
              </div>
              <div class="my-5">
                <v-btn block color="#E7AE71" class="font-weight-bold"
                  >Criar campanha</v-btn
                >
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueCompaign: "R$ 0.00",
      categories: [
        {
          id: 0,
          title: "Todas",
          icon: "mdi-border-all",
        },
        {
          id: 1,
          title: "Artes",
          icon: "mdi-palette",
        },
        {
          id: 2,
          title: "Animais",
          icon: "mdi-paw",
        },
        {
          id: 3,
          title: "Caridade",
          icon: "mdi-heart",
        },
        {
          id: 4,
          title: "Educação",
          icon: "mdi-school",
        },
        {
          id: 5,
          title: "Artes",
          icon: "mdi-palette",
        },
        {
          id: 6,
          title: "Esportes",
          icon: "mdi-basketball",
        },
        {
          id: 7,
          title: "Games",
          icon: "mdi-gamepad-variant",
        },
        {
          id: 8,
          title: "Meio ambiente",
          icon: "mdi-pine-tree",
        },
        {
          id: 9,
          title: "Viagem",
          icon: "mdi-wallet-travel",
        },
        {
          id: 10,
          title: "Esporte",
          icon: "mdi-basketball",
        },
      ],
    };
  },
};
</script>

<style></style>
