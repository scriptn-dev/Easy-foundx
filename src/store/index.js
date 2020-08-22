import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    campaigns: null,
    categorySelected: "",
  },
  mutations: {
    insertCampaigns(state, data) {
      state.campaigns = data;
    },
    insertCategorie(state, data) {
      state.categorySelected = data;
    },
  },
  actions: {},
  modules: {},
});
