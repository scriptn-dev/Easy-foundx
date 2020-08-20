<template>
  <div class="black intro-login mb-7">
    <v-img
      src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      height="500px"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-row justify="center" align-content="center">
        <v-col cols="12" sm="4">
          <router-view class="mx-3"></router-view>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* .intro-login {
  height: 500px;
} */
</style>
