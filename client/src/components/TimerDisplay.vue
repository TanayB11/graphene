<template>
  <div class="timer-display">
    <div class="text-center">
      <h1
        id="time"
        :class="[
          'text-8xl',
          $store.getters.getTimerIsPrimed ? 'text-green-400' : '',
        ]"
      >
        {{ time }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timer-display',
  props: {},
  data() {
    return {
      startTime: null,
      timer: null,
      time: '0.00',
    }
  },
  methods: {
    updateTime() {
      this.time = ((Date.now() - this.startTime) / 1000).toFixed(2)
    },
  },
  created() {
    window.addEventListener('keyup', (e) => {
      if (e.key == ' ') {
        this.$store.commit('updateIsTiming', !this.$store.getters.getIsTiming)
        if (this.$store.getters.getIsTiming) {
          this.$store.commit('updateIsTiming', true)
          this.startTime = Date.now()
          this.timer = setInterval(this.updateTime, 10, false)
          this.$store.commit('updateTimerIsPrimed', false)
        }
      }
    })

    window.addEventListener('keydown', (e) => {
      if (e.key == ' ') {
        if (this.$store.getters.getIsTiming) {
          clearInterval(this.timer)
          this.$store.dispatch('genScramble', '333')
          this.$store.dispatch('updateIndexedDb', {
            puzzle: '333',
            scramble: this.$store.getters.getScramble,
            time: this.time,
          })
        } else {
          this.$store.commit('updateTimerIsPrimed', true)
          this.time = '0.00'
        }
      }
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
