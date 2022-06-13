<template>
  <div class="home">
    <div class="h-screen overflow-hidden">
      <h1 class="absolute p-10 text-4xl">graphene</h1>
      <div class="flex flex-col justify-center min-h-full">
        <TimerDisplay />
        <ScrambleDisplay />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TimerDisplay from '@/components/TimerDisplay.vue'
import ScrambleDisplay from '@/components/ScrambleDisplay.vue'

export default {
  name: 'HomeView',
  components: {
    TimerDisplay,
    ScrambleDisplay,
  },
}
</script>
