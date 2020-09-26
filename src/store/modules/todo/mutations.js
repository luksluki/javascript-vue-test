const SET_TODOS = (state, payload) => {
    const complete = payload.filter(data => data.completed == true)
    const incomplete = payload.filter(data => data.completed == false)

    state.todos = payload
    state.complete = complete
    state.incomplete = incomplete
}

const SET_COMPLETE = (state, payload) => {
    state.complete = payload
}

const SET_INCOMPLETE = (state, payload) => {
    state.incomplete = payload
}

const SET_LOADING = (state, payload = true) => {
    state.loading = payload
}

const GET_TODOS_ERROR = (state, errorMessage) => {
    state.errorMessage = errorMessage;
}

const NEW_TODO = (state, payload) => {
    state.incomplete.unshift(payload)
}

const DELETE_TODO = (state, id) => {
    state.incomplete = state.incomplete.filter(todo => todo.id !== id)
    state.complete = state.complete.filter(todo => todo.id !== id)
}

const EDIT_TODO = (state, payload) => {
    console.log('edit')
    const index = state.todos.findIndex(todo => todo.id === payload.id)
    if (index !== -1) {
        state.todos.splice(index, 1, payload)
    }
}

export default {
    SET_TODOS,
    SET_COMPLETE,
    SET_INCOMPLETE,
    SET_LOADING,
    GET_TODOS_ERROR,
    NEW_TODO,
    DELETE_TODO,
    EDIT_TODO
}