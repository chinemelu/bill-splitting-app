import AxiosCalls from '../../helper/AxiosCalls';
/**
 * Manage mobile money payments
 *
 */
export default {
  state: {
    isCreateBillsPageLoading: false,
    hasCreateBillsPageErrored: false,
    hasSigninErrored: false,
    bills: {},
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
    IS_CREATE_BILLS_PAGE_LOADING(state, payload) {
      state.isCreateBillsPageLoading = payload;
    },
    IS_LIST_BILLS_PAGE_LOADING(state, payload) {
      state.isListBillsPageLoading = payload;
    },
    HAS_BILL_CREATION_PAGE_ERRORED(state, payload) {
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
    BILL_CREATION_SUCCESS(state, payload) {
      state.bills = payload;
    },
  },
  actions: {
    /**
         * signup user
         *
         * @param {object} commit Vuex action context commit
         * @param payload
         */
    handleBillCreation: async ({ commit, rootState }, payload) => {
      commit('IS_CREATE_BILLS_PAGE_LOADING', true);
      commit('HAS_BILL_CREATION_PAGE_ERRORED', false);
      try {
        console.log('payload', payload);
        const billCreationResponse = await AxiosCalls.post(`${rootState.baseUrl}/create`, payload);
        commit('HAS_BILL_CREATION_PAGE_ERRORED', false);
        commit('IS_CREATE_BILLS_PAGE_LOADING', false);
        commit('BILL_CREATION_SUCCESS', billCreationResponse.data.message.bill);
      } catch (error) {
        commit('HAS_BILL_CREATION_PAGE_ERRORED', false);
        commit('IS_CREATE_BILLS_PAGE_LOADING', false);
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
