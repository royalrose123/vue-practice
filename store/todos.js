export const state = () => ({
  // list: []
})

export const getters = {
  list: (state, getters) => {
    return state.list
  }
}

export const actions = {
  async GET_TODOS(store) {
    store.commit(
      'SET_TODOS',
      await this.$axios.get('/api/todos', {
        useCache: process.env.NODE_ENV !== 'production'
      })
    )
  }
}

export const mutations = {
  SET_TODOS(state, payload) {
    state.list = payload.data
  },
  TOGGLE_TODO(state, payload) {
    state.list = state.list.map((item, id) => {
      if (payload.id === item.id) {
        return { ...item, isCompleted: !item.isCompleted }
      } else {
        return item
      }
    })
  },
  DELETE_TODO(state, payload) {
    state.list = state.list.filter((item, index) => payload.id !== item.id)
  }
}
