<template>
  <div>
    <v-row justify="center">
      <v-col v-for="n in 3" :key="n" sm="3">
        <v-row no-gutters align="center">
          <v-col cols="auto">
            <v-avatar>
              <v-icon>mdi-instagram</v-icon>
            </v-avatar></v-col
          >
          <v-col cols="auto"
            ><div class="social-easy-foudxs">
              <span>@easyfoudxs</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.social-easy-foudxs {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  color: #060606;
}
</style>
