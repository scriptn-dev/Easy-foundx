<template>
  <v-container class="grey lighten-4" fluid>
    <v-row>
      <v-col cols="10" sm="2">
        <MenuCategories />
      </v-col>
      <v-col>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuCategories from "@/components/compaigns/MenuCategories.vue";
export default {
  components: {
    MenuCategories,
  },
};
</script>

<style>
.subheader {
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #3f3d56;
}
</style>
