<template>
  <div class="scramble-display">
    <span
      class="chip ~info text-lg mr-2 p-2 transition ease-in-out hover:opacity-75 duration-300 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    </span>
    <span
      class="chip ~positive text-lg mr-2 p-2 transition ease-in-out hover:opacity-75 duration-300 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="10" x2="14" y1="2" y2="2"></line>
        <line x1="12" x2="15" y1="14" y2="11"></line>
        <circle cx="12" cy="14" r="8"></circle>
      </svg>
    </span>
    <span
      class="chip ~urge text-lg mr-2 p-2 transition ease-in-out hover:opacity-75 duration-300 cursor-pointer"
      @click="$store.dispatch('downloadTimes')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
    </span>
    <span
      class="chip ~critical text-lg mr-2 p-2 transition ease-in-out hover:opacity-75 duration-300 cursor-pointer"
      @click="$store.dispatch('deleteLastTime')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path
          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
        ></path>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'settings-table',
}
</script>

<style scoped></style>
