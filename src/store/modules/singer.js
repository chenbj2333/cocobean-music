import * as types from "../mutationTypes";

const state = {
  singer: {}
};

const getters = {
  singer: state => state.singer
};

const actions = {
};

const mutations = {
  [types.SET_SINGER](state, payload) {
    state.singer = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
