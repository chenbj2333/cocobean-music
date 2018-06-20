import { playMode } from "../../common/js/config";
import * as types from "../mutationTypes";

const state = {
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
};

const getters = {
  playing: state => state.playing,
  fullScreen: state => state.fullScreen,
  playList: state => state.playList,
  sequenceList: state => state.sequenceList,
  mode: state => state.mode,
  currentIndex: state => state.currentIndex,
  currentSong: state => {
    return state.playList[state.currentIndex] || {};
  }
};

const actions = {
  selectPlay: ({ commit, state }, { list, index }) => {
    console.log(state);
    commit(types.SET_SEQUENCELIST, list);
    commit(types.SET_PLAYLIST, list);
    commit(types.SET_CURRENT_INDEX, index);
    commit(types.SET_FULL_SCREEN, true);
    commit(types.SET_PLAYING_STATE, true);
  }
};

const mutations = {
  [types.SET_PLAYING_STATE](state, payload) {
    state.playing = payload;
  },
  [types.SET_FULL_SCREEN](state, payload) {
    state.fullScreen = payload;
  },
  [types.SET_PLAYLIST](state, payload) {
    state.playList = payload;
  },
  [types.SET_SEQUENCELIST](state, payload) {
    state.sequenceList = payload;
  },
  [types.SET_PLAY_MODE](state, payload) {
    state.mode = payload;
  },
  [types.SET_CURRENT_INDEX](state, payload) {
    state.currentIndex = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
