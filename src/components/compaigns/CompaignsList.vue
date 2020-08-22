<template>
  <div>
    <div class="subheader">
      <!-- {{ $store.state.campaigns }} -->

      <div>
        <span
          >{{ category }} <span v-text="'(' + campaignsVuex.length + ')'"></span
        ></span>
      </div>
    </div>
    <v-row>
      <v-col
        v-for="(campaign, key) in campaignsVuex"
        :key="key"
        cols="12"
        sm="3"
        md="3"
        lg="3"
      >
        <CardCompaign :campaign="campaign" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CardCompaign from "@/components/compaigns/CardCompaign.vue";
import CategorieService from "@/services/categorie/CategorieService";
import CampaignService from "@/services/campaign/CampaignService";

export default {
  components: {
    CardCompaign,
  },

  mounted() {
    CategorieService.list().then((response) => {
      this.categories = response.data;
    });

    CampaignService.listCampaigns()
      .then((response) => {
        this.$store.commit("insertCampaigns", response.data);
      })
      .catch((error) => {
        this.messageError = true;
        console.log(error);
      });
  },
  computed: {
    campaignsVuex() {
      if (this.$store.state.categorySelected) {
        let result;
        result = this.$store.state.campaigns.filter((campaigns) => {
          return (
            campaigns.categoria_id == this.$store.state.categorySelected.id
          );
        });
        return result;
      }
      return this.$store.state.campaigns;
    },
    category() {
      if (this.$store.state.categorySelected) {
        return this.$store.state.categorySelected.categoria;
      } else {
        return "Todas as categorias";
      }
    },
  },
  data() {
    return {
      image: "https://picsum.photos/350/200?img=1",
      categories: [],
      categorie_id: null,
      campaign: {
        categoria_id: null,
      },
      aqui: null,
    };
  },
  methods: {
    listCampaignByCategorie(value) {
      this.campaign.categoria_id = this.campaign.categoria_id.id;
      if (this.campaign.categoria_id != null) {
        CampaignService.listCampaignByCategorie(value)
          .then((response) => {
            this.campaigns = response.data;
          })
          .catch((error) => {
            this.messageError = true;
            console.log(error);
          });
      }
    },
  },
};
</script>

<style></style>
