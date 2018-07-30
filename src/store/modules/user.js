import { getUserData, getUserContribs } from "../../api/api";

//initial state
const state = {
  data: {
    userName: "",
    contribs: {}
  },
  fetchUser: false,
  userNotFound: false,
  isWelcomed: false
};

//actions
const actions = {
  getUser({ commit, state }, userName) {
    commit("setFetchUser", true);
    if (!userName) {
      commit("setFetchUser", false);
      commit("setUserNotFound", true);
    } else if (userName && state.userNotFound) {
      commit("setUserNotFound", false);
    }
    const userData = getUserData(userName);
    const userContribs = getUserContribs(userName);
    Promise.all([userData, userContribs])
      .then(data => {
        if (!data[0].login) {
          commit("setFetchUser", false);
          commit("setUserNotFound", true);
        }
        commit("setUser", {
          ...data[0],
          ...data[1]
        });
        console.log("UserData", state);
        commit("setFetchUser", false);
      })
      .catch(reason => console.log(reason));
  },
  welcomeUser({ commit }, status) {
    commit("setUserWelcomed", status);
  }
};
//mutations
const mutations = {
  setUser(state, user) {
    state.data = { ...user };
  },
  setFetchUser(state, status) {
    state.fetchUser = status;
  },
  setUserNotFound(status) {
    state.userNotFound = status;
  },
  setUserWelcomed(status) {
    state.isWelcomed = status;
  }
};

export default {
  namespaced: false,
  state,
  actions,
  mutations
};
