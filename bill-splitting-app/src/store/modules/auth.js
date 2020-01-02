import AxiosCalls from '../../helper/AxiosCalls';
/**
 * Manage mobile money payments
 *
 */
export default {
  state: {
    isSignupPageLoading: false,
    hasErrored: false,
    user: {},
    signupError: '',
    networkError: '',
  },
  mutations: {
    /**
         * Select a bank
         *
         * @param {Object} state Local vuex state
         * @param {Object} data
         *
         * @todo Describe the data object properly.
         */
    IS_SIGNUP_PAGE_LOADING(state, payload) {
      state.isSignupPageLoading = payload;
    },
    HAS_ERRORED(state, payload) {
      state.hasErrored = payload;
      if (payload) {
        state.networkError = 'An error has occured. Please try again';
      } else {
        state.networkError = '';
      }
    },
    USER_SIGNUP_SUCCESS(state, payload) {
      state.user = payload;
    },
    USER_SIGNUP_ERROR(state, payload) {
      state.signupError = payload;
    },
  },
  actions: {
    /**
         * signup user
         *
         * @param {object} commit Vuex action context commit
         * @param payload
         */
    handleSignup: async ({ commit, rootState }, payload) => {
      commit('IS_SIGNUP_PAGE_LOADING', true);
      commit('HAS_ERRORED', false);
      try {
        const signupResponse = await AxiosCalls.post(`${rootState.baseUrl}/signup`, payload);
        console.log('sign up response', signupResponse.data.message.user);
        commit('USER_SIGNUP_ERROR', '');
        commit('HAS_ERRORED', false);
        commit('IS_SIGNUP_PAGE_LOADING', false);
        commit('USER_SIGNUP_SUCCESS', signupResponse.data.message.user);
      } catch (error) {
        if (error.status === 'error') {
          commit('USER_SIGNUP_ERROR', error.message.email[0]
        || error.message.username[0]);
        } else {
          commit('USER_SIGNUP_ERROR', '');
          commit('HAS_ERRORED', true);
        }
        commit('IS_SIGNUP_PAGE_LOADING', false);
      }
    },
  },
};
