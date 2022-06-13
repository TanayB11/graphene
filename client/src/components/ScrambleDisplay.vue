<template>
  <div class="scramble-display">
    <div class="absolute bottom-0 w-full text-center">
      <h3
        v-if="!$store.getters.getTimerIsPrimed && !$store.getters.getIsTiming"
        class="w-1/2 p-10 mx-auto text-3xl"
      >
        {{ $store.state.scramble }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scramble-display',
  methods: {},
  created() {
    this.$store.commit('genScramble')
  },
}
</script>

<style scoped></style>
