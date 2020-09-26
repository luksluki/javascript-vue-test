import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  todos: [],
  complete: [],
  incomplete: [],
  loading: false,
  errorMessage: ''
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
