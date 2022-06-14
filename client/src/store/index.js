import { createStore } from 'vuex'
import { randomScrambleForEvent } from 'cubing/scramble'
import Dexie from 'dexie'
import download from 'downloadjs'
import { exportDB } from 'dexie-export-import'

// initialize indexedDB wrapper
let db = new Dexie('grapheneDB')
db.version(1).stores({
  timerData: '++id,puzzle,scramble,time',
})

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
          console.error(err)
        })
    },
    updateIndexedDb(context, payload) {
      db.timerData
        .add({
          puzzle: payload.puzzle,
          scramble: payload.scramble,
          time: payload.time,
        })
        .catch((err) => {
          console.error(err)
        })
    },
    deleteLastTime() {
      db.timerData
        .orderBy('id')
        .last()
        .then((res) => {
          db.timerData.delete(res.id)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    downloadTimes() {
      exportDB(db).then((res) => {
        download(res, 'graphene_export.json')
      })
    },
  },
  modules: {},
})
