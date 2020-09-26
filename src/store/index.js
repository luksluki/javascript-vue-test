import Vue from "vue";
import Vuex from "vuex";

import todoModules from "./modules/todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    todo: todoModules,
  }
});