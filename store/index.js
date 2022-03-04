import Account from './data.json';
export const state = () => ({
  Account: Account,
  isClicked: false,
  filteredAcc: [],
  isLoading: false
})
 export const mutations = {
    getAccountById(state, id) {
      state.isLoading = true;
     state.isClicked = true;
state.filteredAcc = state.Account.find((account) => account.account_id == id);
      state.isLoading = false;
    }
  }
  // export const getters = {
  //   getAccountById: (state) => (id) => {
  //     state.isClicked = true;
  //     state.filteredAcc = state.Account.find((account) => account.id == id);
  //   },

  // };
