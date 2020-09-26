import Vue from 'vue'
import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

Vue.use(axios)

const getTodos = ({ commit }) => {
    return new Promise ((resolve, reject) => {
        commit("SET_LOADING");
        axios
            .get(baseUrl + '/todos')
            .then(result => {
                commit("SET_TODOS", result.data)
                resolve(result.data);
            })
            .catch(error => {
                console.log(error)
                commit("GET_TODOS_ERROR", error);
                reject(new Error("error"));
            })
            .finally(() => {
                commit("SET_LOADING", false);
            });
    })
}

const addTodo = async ({ commit }, data) => {
    const response = await axios.post(baseUrl + '/todos', data)
    if (response.status === 201) {
        commit("NEW_TODO", response.data)
    }
}

const deleteTodo = async ({ commit }, id) => {
    const response = await axios.delete(baseUrl + '/todos/' + id)
    if (response.status === 200) {
        commit("DELETE_TODO", id)
    }
}

const editTodo = async ({ commit }, data) => {
    const response = await axios.put(baseUrl + '/todos/' + data.id, data)
    if (response.status === 200) {
        commit("EDIT_TODO", response.data)
    }
}

export default {
  getTodos,
  addTodo,
  deleteTodo,
  editTodo
}
