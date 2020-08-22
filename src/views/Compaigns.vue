<template>
  <div class="grey lighten-4 col-sm-12 col-lg-12 col-xl-8  mx-auto">
    <v-container fluid>
      <v-row>
        <v-col cols="10" sm="2">
          <MenuCategories />
        </v-col>
        <v-col cols="12" sm="10">
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
