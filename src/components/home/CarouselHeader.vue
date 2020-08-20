<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-row class="fill-height" align="center" justify="center">
        <div class="text-center">
          <h2>
            Easy Fundx
          </h2>
          <h3 class="my-3 pa-5">
            Crie seu projeto com facilidade, agilidade e segurança
          </h3>
          <v-btn class="black--text" depressed color="white"
            >Criar campanha</v-btn
          >
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://www.easyfundx.com/img/1.b109e63e.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.title-campaign-slider {
  color: white;
  font-size: 1.2rem;
  margin: 2rem 0;
}
.image-carousel {
  filter: grayscale(100%) saturate(1) brightness(99%);
  -webkit-filter: grayscale(100%) saturate(1) brightness(99%);
}
.title-easy {
  font-size: 4rem;
  color: white;
}
.subtitle-easy {
  padding-bottom: 2rem;
  color: white;
  font-size: 1.5rem;
  padding: 2rem 10rem;
}
</style>
