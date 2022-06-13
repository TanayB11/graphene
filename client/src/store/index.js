import { createStore } from 'vuex'
import { randomScrambleForEvent } from 'cubing/scramble'

export default createStore({
  state: {
    scramble: '',
    isTiming: false,
    timerIsPrimed: false,
  },
  getters: {
    getScramble(state) {
      return state.scramble
    },
    getIsTiming(state) {
      return state.isTiming
    },
    getTimerIsPrimed(state) {
      return state.timerIsPrimed
    },
  },
  mutations: {
    updateIsTiming(state, value) {
      state.isTiming = value
    },
    updateTimerIsPrimed(state, value) {
      state.timerIsPrimed = value
    },
    updateScramble(state, scramble) {
      state.scramble = scramble
    },
  },
  actions: {
    genScramble(context, event) {
      randomScrambleForEvent(event)
        .then((res) => {
          context.commit('updateScramble', res.toString())
        })
        .catch((err) => {
          console.warn(err)
        })
    },
  },
  modules: {},
})
