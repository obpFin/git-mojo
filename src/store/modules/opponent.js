import { fetchUserData, fetchUserContribs } from '../../api/api';

// initial state
const state = {
  opponents: []
};

// actions
const actions = {
  getOpponent({ commit }, userName) {
    commit('eraseNotFoundOpponents');
    commit('setFetchOpponent', true);
    const opponentData = fetchUserData(userName);
    const opponentContribs = fetchUserContribs(userName);
    Promise.all([opponentData, opponentContribs]).then(
      data => {
        commit('setOpponent', {
          ...data[0],
          ...data[1]
        });
        console.log('OpponentData', state);
      },
      error => {
        console.log(error);
        commit('setOpponentNotFound', true);
      }
    );
  },
  removeOpponent({ commit }, id) {
    commit('removeOpponentFromStore', id);
  }
};
// mutations
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
  setOpponentNotFound(state) {
    const index = state.opponents.findIndex(obj => obj.loading);
    if (index > -1) {
      state.opponents[index].loading = false;
      state.opponents[index].notFound = true;
    }
  },
  removeOpponentFromStore(state, id) {
    state.opponents.map(o => console.log(o.id));
    state.opponents = state.opponents.filter(opp => opp.id !== id);
  }
};
// getters
const getters = {};

// helpers
const readyOpponents = state =>
  state.opponents.filter(opp => !opp.notFound && !opp.loading);

export default {
  namespaced: false,
  state,
  actions,
  mutations,
  getters
};
