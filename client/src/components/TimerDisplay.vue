<template>
  <div class="timer-display">
    <div class="text-center">
      <h1
        id="time"
        :class="['text-8xl', timerIsPrimed ? 'text-green-400' : '']"
      >
        {{ time }}
      </h1>
      <div class="absolute bottom-0 w-full">
        <h3
          v-if="!timerIsPrimed && !isTiming"
          class="w-1/2 p-10 mx-auto text-3xl"
        >
          {{ scramble }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
let min2phase = require('../min2phase.js/min2phase')

export default {
  name: 'timer-display',
  props: {},
  data() {
    return {
      timerIsPrimed: false,
      isTiming: false,
      startTime: null,
      timer: null,
      time: '0.00',
      scramble: '',
    }
  },
  methods: {
    updateTime() {
      this.time = ((Date.now() - this.startTime) / 1000).toFixed(2)
    },
    grabScramble() {
      let randomCube = min2phase.randomCube()

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

      this.scramble = randomCube.trim()
    },
  },
  created() {
    this.grabScramble()

    window.addEventListener('keyup', (e) => {
      if (e.key == ' ') {
        this.isTiming = !this.isTiming
        if (this.isTiming) {
          this.isTiming = true
          this.startTime = Date.now()
          this.timer = setInterval(this.updateTime, 10, false)
          this.timerIsPrimed = false
        }
      }
    })

    window.addEventListener('keydown', (e) => {
      if (e.key == ' ') {
        if (this.isTiming) {
          clearInterval(this.timer)
        } else {
          this.timerIsPrimed = true
          this.time = '0.00'
        }
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
