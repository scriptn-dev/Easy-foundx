<template>
  <div id="banner-intro">
    <v-card flat class="pa-0 " color="#dedede" rounded>
      <v-row justify="space-between" align="center" no-gutters>
        <v-col class="pa-5" cols="auto" sm="5">
          <div class="title-banner">
            <span>
              Encontre projetos incríveis <br />
              junto com seus amigos
            </span>
          </div>

          <div class="my-5">
            <p class="details-banner">
              Ajude pessoas em situações de vulnerabilidade e pague o que achar
              justo ao Easy Fundxs.
            </p>
          </div>

          <v-row>
            <v-col cols="auto" sm="6">
              <v-btn block rounded large depressed color="black" dark>
                Explorar</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto" sm="6">
          <v-img
            max-width="669px"
            max-height="300px"
            class="image-banner"
            src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          ></v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title-banner {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 20px;
  text-align: left;
  color: #666;
}
.details-banner {
  font-family: Montserrat;
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  color: #464353;
}
</style>
