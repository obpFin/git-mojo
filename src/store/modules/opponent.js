import { fetchUserData, fetchUserContribs } from "../../api/api";

//initial state
const state = {
  opponents: []
};

//actions
const actions = {
  getOpponent({ commit, state }, userName) {
    commit("eraseNotFoundOpponents");
    commit("setFetchOpponent", true);
    const opponentData = fetchUserData(userName);
    const opponentContribs = fetchUserContribs(userName);
    Promise.all([opponentData, opponentContribs]).then(
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
    );
  }
};
//mutations
const mutations = {
  setOpponent(state, opponent) {
    state.opponents = readyOpponents(state);
    state.opponents.push(opponent);
  },
  eraseNotFoundOpponents(state) {
    state.opponents = readyOpponents(state);
  },
  setFetchOpponent(state, status) {
    if (status === true) {
      state.opponents.push({ loading: true });
    }
  },
  setOpponentNotFound(state, status) {
    const index = state.opponents.findIndex(obj => obj.loading);
    if (index > -1) {
      console.log("Index ", index);
      state.opponents[index].loading = false;
      state.opponents[index].notFound = true;
    }
  }
};
//getters
const getters = {};

//helpers
const readyOpponents = state =>
  state.opponents.filter(opp => !opp.notFound && !opp.loading);

export default {
  namespaced: false,
  state,
  actions,
  mutations,
  getters
};
