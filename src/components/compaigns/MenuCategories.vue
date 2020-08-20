<template>
  <div>
    <div class="subheader py-3">
      <span>Filtrar Resultados</span>
    </div>
    <v-card color="#FAFAFA" flat>
      <v-list color="#FAFAFA" dense>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in categories" :key="i">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
