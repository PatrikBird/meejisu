<script setup lang="ts">
import { isDark } from '/~/logics'
import BrunchLogo from './icons/BrunchLogo.vue'
</script>

<template>
  <nav class="text-xl text-center mt-4">
    <a class="icon-btn mx-2 my-auto" href="https://google.com" target="_blank" title="Brunch">
      <brunch-logo v-show="!isDark" />
      <brunch-logo-white v-show="isDark" />
    </a>

    <a class="icon-btn mx-2" href="https://youtube.com" target="_blank" title="YouTube">
      <simple-line-icons:social-youtube />
    </a>

    <a
      class="icon-btn mx-2"
      href="https://twitter.com/veganmeejisu"
      target="_blank"
      title="Twitter">
      <feather-twitter />
    </a>
  </nav>
</template>
