
const snackbar = {
  state: {
    show: false,
    color: 'success',
    text: 'vue-vuetify-admin'
  },

  mutations: {
    SHOWN: (state) => {
      state.show = !state.show
    },
    SET_COLOR: (state, color) => {
      state.color = color
    },
    SET_TEXT: (state, text) => {
      state.text = text
    }
  },

  actions: {
    setShow ({ commit }, snackbarInfo) {
      commit('SHOWN')
      if (snackbarInfo) {
        if (snackbarInfo.color) {
          commit('SET_COLOR', snackbarInfo.color)
        }
        if (snackbarInfo.text) {
          commit('SET_TEXT', snackbarInfo.text)
        }
      }
    }
  }
}

export default snackbar
