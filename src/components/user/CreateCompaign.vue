<template>
  <v-card flat class="white pa-5">
    <v-row justify="center">
      <v-col sm="10">
        <div class="form-create-compaign py-5">
          <v-row justify="space-between" align="center">
            <v-col sm="" cols="auto"
              ><div class="subheader ">
                <span>Criar campanha</span>
              </div></v-col
            >
          </v-row>
          <div class="form">
            <v-row>
              <v-col cols="12" sm="6">
                <small>Escreva um titulo</small>
                <div>
                  <v-text-field
                    flat
                    solo
                    outlined
                    label="Ex: Campanha para ajudar cães de rua"
                    id="id"
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div>
                  <small>Escolha a categoria</small>
                  <v-select
                    solo
                    flat
                    outlined
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
                outlined
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
                    outlined
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
                    outlined
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
                  outlined
                  v-model="valueCompaign"
                  id="id"
                ></v-text-field>
              </div>
              <div>
                <small>Qual o prazo da campanha?</small>
                <v-text-field
                  flat
                  solo
                  outlined
                  messages="Minimo de 10 e máximo de 90 dias"
                  type="number"
                  id="id"
                ></v-text-field>
              </div>
            </div>
            <div class="my-5">
              <v-btn large block color="#E7AE71" class="font-weight-bold"
                >Criar campanha</v-btn
              >
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {};
</script>

<style></style>
