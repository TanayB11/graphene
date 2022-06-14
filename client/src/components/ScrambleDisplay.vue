<template>
  <div class="scramble-display">
    <div class="absolute bottom-0 w-full text-center">
      <h3
        :class="[
          'w-2/3',
          'p-10',
          'mx-auto',
          'text-3xl',
          'transition-opacity',
          'duration-200',
          !$store.getters.getIsTiming && !$store.getters.getTimerIsPrimed
            ? 'opacity-100'
            : 'opacity-0',
        ]"
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
    this.$store.dispatch('genScramble', '333')
  },
}
</script>

<style scoped></style>
