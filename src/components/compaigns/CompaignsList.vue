<template>
  <div>
    <div class="subheader">
      <span>Todas as campanhas</span>
    </div>
    <v-row>
      <v-col v-for="n in 10" :key="n" sm="3">
        <CardCompaign />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardCompaign from "@/components/compaigns/CardCompaign.vue";
export default {
  components: {
    CardCompaign,
  },
};
</script>

<style></style>
