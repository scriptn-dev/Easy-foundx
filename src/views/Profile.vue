<template>
  <div class="grey lighten-4">
    <v-container>
      <v-col sm="10">
        <div>
          <v-row align="center" justify="space-between">
            <v-col cols="auto" sm="6">
              <v-row justify="start">
                <v-col cols="auto">
                  <v-btn text small color="dark" :to="{ name: 'my-profile' }"
                    >Minha Conta</v-btn
                  >
                </v-col>
                <v-col>
                  <v-btn
                    :to="{ name: 'list-compaigns' }"
                    text
                    small
                    color="dark"
                    >Campanhas</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="auto">
              <v-btn
                small
                :to="{ name: 'create-compaign-profile' }"
                dark
                color="black"
                >Nova campanha</v-btn
              ></v-col
            >
          </v-row>
        </div>
        <router-view></router-view>
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Minha Conta", icon: "mdi-account" },
        { title: "Minhas Campanhas", icon: "mdi-heart" },
        { title: "Precisa ajuda?", icon: "mdi-handshake" },
      ],
    };
  },
};
</script>

<style></style>
