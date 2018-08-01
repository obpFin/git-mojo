import { fetchUserData, fetchUserContribs, fetchUserOrgs } from "../../api/api";

//initial state
const state = {
  data: {},
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
    const userData = fetchUserData(userName);
    const userContribs = fetchUserContribs(userName);
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
        if (data[0].organizations_url) {
          fetchUserOrgs(data[0].organizations_url).then(orgs => {
            commit("setUserOrgs", orgs);
          });
        }
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
  setUserOrgs(state, orgs) {
    state.data = { ...state.data, orgs };
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
//getters
const getters = {
  isLoggedIn(state) {
    return state.data.login != null;
  }
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
  getters
};
