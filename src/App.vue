<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { property: 'og:title', content: 'Meejisu' },
    { property: 'og:image', content: 'https://patrikbird.me/avatar.png' },
    { name: 'description', content: "Meejisu's website" },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@veganmeejisu' },
  ],
})
</script>
