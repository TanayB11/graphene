<template>
  <div class="home">
    <div class="h-screen overflow-hidden">
      <div class="absolute p-10">
        <button
          class="text-4xl cursor-pointer"
          @click="modalIsVisible = !modalIsVisible"
        >
          graphene
        </button>
        <SettingsTable
          :class="[
            'my-5',
            modalIsVisible &&
            !$store.getters.getIsTiming &&
            !$store.getters.getTimerIsPrimed
              ? 'opacity-100'
              : 'opacity-0',
            'transition-opacity',
            'duration-200',
          ]"
        />
      </div>
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
import SettingsTable from '@/components/SettingsTable.vue'

export default {
  name: 'HomeView',
  components: {
    TimerDisplay,
    ScrambleDisplay,
    SettingsTable,
  },
  data() {
    return {
      modalIsVisible: false,
    }
  },
  methods: {},
}
</script>
