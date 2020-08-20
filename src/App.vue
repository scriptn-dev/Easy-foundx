<template>
  <v-app id="App" class="app grey lighten-5 ">
    <NavBar />
    <v-main class="bar">
      <router-view />
      <v-container>
        <Footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#App {
  font-family: "Montserrat", sans-serif !important;
  overflow-x: hidden;
  color: #293040 !important;
}
html ::-webkit-scrollbar {
  display: none;
}
.bar ::-webkit-scrollbar {
  display: contents;
}
.v-btn {
  font-family: "Montserrat", sans-serif !important;

  text-transform: none !important;
}
</style>
