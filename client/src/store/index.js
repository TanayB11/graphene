import { createStore } from 'vuex'
let scrambler = require('../lib/min2phase')

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
    genScramble(state) {
      let randomCube = scrambler.randomCube()

      // eslint-disable-next-line
      let replaceMap = { // eslint-disable-next-line
        'RRR': "R'", // eslint-disable-next-line
        'LLL': "L'", // eslint-disable-next-line
        'FFF': "F'", // eslint-disable-next-line
        'BBB': "B'", // eslint-disable-next-line
        'UUU': "U'", // eslint-disable-next-line
        'DDD': "D'", // eslint-disable-next-line
        'RR': 'R2', // eslint-disable-next-line
        'LL': 'L2', // eslint-disable-next-line
        'FF': 'F2', // eslint-disable-next-line
        'BB': 'B2', // eslint-disable-next-line
        'UU': 'U2', // eslint-disable-next-line
        'DD': 'D2', // eslint-disable-next-line
      }

      for (let key in replaceMap) {
        randomCube = randomCube.replace(new RegExp(key, 'g'), replaceMap[key])
      }

      // eslint-disable-next-line
      randomCube = randomCube.replace(/([RLBFUD]\')/g, ' $1 ')
      randomCube = randomCube.replace(/([RLBFUD]2)/g, ' $1 ')
      randomCube = randomCube.replace(/([RLBFUD])([RLBFUD])/g, ' $1 $2 ')

      state.scramble = randomCube.trim()
    },
  },
  actions: {},
  modules: {},
})
