<template>
  <div>
    <v-row justify="center">
      <v-col sm="2" v-for="item in categories" :key="item.id">
        <v-row align="center">
          <v-avatar>
            <v-icon color="black">{{ item.icon }}</v-icon>
          </v-avatar>
          <span class="title-category">{{ item.title }}</span>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
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

<style>
.title-category {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  color: #3f3d56;
}
</style>
