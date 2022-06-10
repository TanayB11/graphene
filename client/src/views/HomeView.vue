<template>
  <div class="home">
    <div class="h-screen overflow-hidden">
      <h1 class="absolute p-10 text-4xl">graphene</h1>
      <div class="flex flex-col justify-center min-h-full">
        <TimerDisplay class="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TimerDisplay from '@/components/TimerDisplay.vue'

export default {
  name: 'HomeView',
  components: {
    TimerDisplay,
  },
}
</script>
