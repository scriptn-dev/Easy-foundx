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
    SET_LOGGED_USER(state, { token, id }) {
      state.token = token;
      state.id = id;
    },
    LOGOUT_USER(state) {
      state.token = null;
      state.id = null;
    },
  },
  actions: {},
  modules: {},
});
