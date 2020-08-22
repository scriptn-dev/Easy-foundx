<template>
  <div>
    <div class="subheader py-3">
      <span>Filtrar Resultados</span>
    </div>
    <v-card color="#FAFAFA" flat>
      <v-list color="#FAFAFA" dense>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in categories"
            :key="i"
            @click="categorySelected(item)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.categoria"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import CategorieService from "@/services/categorie/CategorieService";

export default {
  mounted() {
    CategorieService.list().then((response) => {
      this.categories = response.data;
    });
  },
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    campaignsVuex() {
      return this.$store.state.campaigns;
    },
  },
  methods: {
    categorySelected(value) {
      this.$store.commit("insertCategorie", value);
    },
  },
};
</script>

<style></style>
