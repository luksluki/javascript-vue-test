const allTodos = (state) => {
    return state.todos
}
const completeTodos = (state) => {
    return state.complete
}
const incompleteTodos = (state) => {
    return state.incomplete
}

export default {
    allTodos,
    completeTodos,
    incompleteTodos
}