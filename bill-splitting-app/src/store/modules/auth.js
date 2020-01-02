import AxiosCalls from '../../helper/AxiosCalls';
/**
 * Manage mobile money payments
 *
 */
export default {
  state: {
    isSignupPageLoading: false,
    isSigninPageLoading: false,
    hasErrored: false,
    hasSigninErrored: false,
    user: {},
    authUser: {},
    signupError: '',
    signinError: '',
    networkError: '',
    networkSigninError: '',
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
    IS_SIGNIN_PAGE_LOADING(state, payload) {
      state.isSigninPageLoading = payload;
    },
    HAS_ERRORED(state, payload) {
      state.hasErrored = payload;
      if (payload) {
        state.networkError = 'An error has occured. Please try again';
      } else {
        state.networkError = '';
      }
    },
    HAS_SIGNIN_ERRORED(state, payload) {
      state.hasSigninErrored = payload;
      if (payload) {
        state.networkSigninError = 'An error has occured. Please try again';
      } else {
        state.networkSigninError = '';
      }
    },
    USER_SIGNUP_SUCCESS(state, payload) {
      state.user = payload;
    },
    USER_SIGNIN_SUCCESS(state, payload) {
      state.authUser = payload;
    },
    USER_SIGNUP_ERROR(state, payload) {
      state.signupError = payload;
    },
    USER_SIGNIN_ERROR(state, payload) {
      state.signinError = payload;
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
      commit('USER_SIGNUP_ERROR', '');
      try {
        const signupResponse = await AxiosCalls.post(`${rootState.baseUrl}/signup`, payload);
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
    handleSignin: async ({ commit, rootState }, payload) => {
      commit('IS_SIGNIN_PAGE_LOADING', true);
      commit('HAS_SIGNIN_ERRORED', false);
      commit('USER_SIGNIN_ERROR', '');
      try {
        const signinResponse = await AxiosCalls.post(`${rootState.baseUrl}/login`, payload);
        commit('USER_SIGNIN_ERROR', '');
        commit('HAS_SIGNIN_ERRORED', false);
        commit('IS_SIGNIN_PAGE_LOADING', false);
        commit('USER_SIGNIN_SUCCESS', signinResponse.data.message.user);
      } catch (error) {
        if (error.message.email) {
          commit('USER_SIGNIN_ERROR', error.message.email[0]);
        } else if (error.message.password) {
          commit('USER_SIGNIN_ERROR', error.message.password[0]);
        } else {
          commit('USER_SIGNIN_ERROR', '');
        }
        commit('HAS_SIGNIN_ERRORED', true);
        commit('IS_SIGNIN_PAGE_LOADING', false);
      }
    },
  },
};
