import * as types from "../mutationTypes";

const state = {
  disc: {}
};

const getters = {
  disc: state => state.disc
};

const actions = {};

const mutations = {
  [types.SET_DISC](state, payload) {
    state.disc = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
