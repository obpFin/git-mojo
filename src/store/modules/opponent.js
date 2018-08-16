import { fetchUserData, fetchUserContribs } from "../../api/api";

//initial state
const state = {
  opponents: [],
  loading: false,
  opponentNotFound: false
};

//actions
const actions = {
  getOpponent({ commit, state }, userName) {
    commit("setFetchOpponent", true);
    if (!userName) {
      commit("setFetchOpponent", false);
      commit("setOpponentNotFound", true);
    } else if (userName && state.opponents.opponentNotFound) {
      commit("setOpponentNotFound", false);
    }
    const opponentData = fetchUserData(userName);
    const opponentContribs = fetchUserContribs(userName);
    Promise.all([opponentData, opponentContribs])
      .then(
        data => {
          commit("setOpponent", {
            ...data[0],
            ...data[1]
          });
          console.log("OpponentData", state);
        },
        error => {
          console.log(error);
          commit("setOpponentNotFound", true);
        }
      )
      .finally(() => {
        commit("setFetchOpponent", false);
      });
  }
};
//mutations
const mutations = {
  setOpponent(state, opponent) {
    state.opponents = state.opponents.filter(opp => !opp.loading);
    state.opponents.push(opponent);
  },
  setFetchOpponent(state, status) {
    state.loading = status;
    if (status === true) {
      state.opponents.push({ loading: true });
    }
  },
  setOpponentNotFound(state, status) {
    state.opponentNotFound = status;
  }
};
//getters
const getters = {};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
  getters
};
