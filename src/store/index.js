import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser : JSON.parse(localStorage.getItem('currentUser')),
  },
  getters: {
    currentUser : state => state.currentUser, 
  },
  mutations: {
    updateUserInMutation(state, User){
      state.currentUser = User;
      localStorage.setItem('currentUser', JSON.stringify(User));
    },
    clearUserInMutation(state){
      state.currentUser = null;
      localStorage.removeItem('currentUser');
    },
  },
  actions: {
    updateUser (state, User){
      state.commit('updateUserInMutation', User);
    },
    clearUser(state){
      state.commit('clearUserInMutation');
    },
  },
  modules: {},
});
