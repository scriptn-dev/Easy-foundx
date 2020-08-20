<template>
  <div class="home ">
    <Carousel />
    <v-container>
      <div class="compaigns-intro my-6 col-lg-12 mx-auto">
        <span class="title-component">Campanhas Recentes</span>
        <v-row justify="space-around">
          <v-col
            v-for="n in 8"
            :key="n"
            cols="auto"
            xs="12"
            sm="4"
            md="3"
            lg="3"
          >
            <Card />
          </v-col>
        </v-row>
        <div class="text-right">
          <v-btn depressed outlined small color="black"
            >Ver mais campanhas</v-btn
          >
        </div>
      </div>
      <div class=" col-lg-12 my-6 mx-auto">
        <div class="text-center">
          <span class="title-component">Navegue por categorias</span>
        </div>
        <ListCategories />
      </div>
      <div class="col-lg-12  my-6 mx-auto">
        <BannerHome />
      </div>
    </v-container>
    <div class="help-cards black">
      <HelpCards />
    </div>
    <div class=" col-lg-8 my-6 mx-auto">
      <div class="text-center">
        <span class="title-component">Fique por dentro das novidades</span>
      </div>
      <div class="help-cards">
        <Social />
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import BannerHome from "@/components/home/BannerHome.vue";
import Carousel from "@/components/home/CarouselHeader.vue";
import Card from "@/components/compaigns/CardCompaign.vue";
import BannerHome from "@/components/home/BannerHome.vue";
import ListCategories from "@/components/home/ListCategories.vue";
import HelpCards from "@/components/home/HelpCards.vue";
import Social from "@/components/home/Social.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    Card,
    BannerHome,
    ListCategories,
    HelpCards,
    Social,
  },
};
</script>
<style>
.title-component {
  font-weight: 600;
  font-size: 15px;
  text-align: left;
  color: black;
}
</style>
