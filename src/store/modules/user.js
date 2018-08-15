import { fetchUserData, fetchUserContribs, fetchData } from "../../api/api";
import { getFavoriteLang } from "../../utils/utils";

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
      .then(
        data => {
          commit("setUser", {
            ...data[0],
            ...data[1]
          });
          if (data[0].organizations_url) {
            fetchData(data[0].organizations_url).then(orgs => {
              commit("setUserOrgs", orgs);
            });
          }
          if (data[0].public_repos) {
            fetchData(data[0].repos_url).then(repos => {
              const favLang = getFavoriteLang(repos);
              commit("setUserFavLang", favLang);
            });
          }
          console.log("UserData", state);
        },
        error => {
          commit("setUserNotFound", true);
          console.log(error);
        }
      )
      .finally(() => {
        commit("setFetchUser", false);
      });
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
  setUserNotFound(state, status) {
    state.userNotFound = status;
  },
  setUserWelcomed(state, status) {
    state.isWelcomed = status;
  },
  setUserFavLang(state, favoriteLanguage) {
    state.data = { ...state.data, favoriteLanguage };
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
