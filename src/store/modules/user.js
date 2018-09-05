import { fetchUserData, fetchUserContribs, fetchData } from '../../api/api';
import { getFavoriteLang } from '../../utils/utils';
import mojoScore from '../../utils/mojoScore';

// initial state
const state = {
  data: {},
  fetchUser: false,
  userNotFound: false,
  isWelcomed: false,
  apiLimitExceeded: false,
  sidebar: true,
  mobile: window.innerWidth <= 700
};

// actions
const actions = {
  getUser({ commit, state }, userName) {
    commit('setFetchUser', true);
    if (!userName) {
      commit('setFetchUser', false);
      commit('setUserNotFound', true);
    } else if (userName && state.userNotFound) {
      commit('setUserNotFound', false);
    }
    const userData = fetchUserData(userName);
    const userContribs = fetchUserContribs(userName);
    Promise.all([userData, userContribs])
      .then(
        data => {
          commit('setUser', {
            ...data[0],
            ...data[1]
          });
          if (data[0].organizations_url) {
            fetchData(data[0].organizations_url).then(orgs => {
              commit('setUserOrgs', orgs);
            });
          }
          if (data[0].public_repos) {
            fetchData(data[0].repos_url).then(repos => {
              const favLang = getFavoriteLang(repos);
              commit('setUserFavLang', favLang);
            });
          }
        },
        error => {
          if (error === 403) {
            commit('apiLimitExceeded');
          }
          commit('setUserNotFound', true);
          console.log(error);
        }
      )
      .finally(() => {
        commit('setFetchUser', false);
      });
  },
  welcomeUser({ commit }, status) {
    commit('setUserWelcomed', status);
  },
  setNav({ commit }, status) {
    commit('setNav', status)
  },
  toggleNav({ commit }) {
    commit('toggleNav');
  }
};
// mutations
const mutations = {
  setUser(state, user) {
    state.data = { ...user, score: mojoScore(user) };
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
  },
  apiLimitExceeded(state) {
    state.apiLimitExceeded = true;
  },
  toggleNav() {
    state.sidebar = !state.sidebar;
  },
  setNav(state, status) {
    state.sidebar = status
  }
};
// getters
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
