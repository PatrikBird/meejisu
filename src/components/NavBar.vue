<script setup lang="ts">
import { isDark } from '/~/logics'
</script>

<template>
  <header class="header">
    <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false">
      <img v-show="isDark" src="/logo-dark.svg" alt="logo" />
      <img v-show="!isDark" src="/logo.svg" alt="logo" />
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <!-- <router-link to="/">
          <span class="<md:hidden">Home</span>
        </router-link>
        <router-link to="/posts">
          <span class="<md:hidden">Blog</span>
          <iconoir-page class="md:hidden" />
        </router-link>
        <router-link to="/projects">
          <span class="<md:hidden">Projects</span>
          <ion-construct-outline class="md:hidden" />
        </router-link>
        <router-link to="/bookmarks" title="Bookmarks">
          <ri-bookmark-line />
        </router-link>
        <router-link to="/notes" title="Notes">
          <ri-sticky-note-line />
        </router-link> -->
        <a href="https://google.com" target="_blank" title="Brunch">
          <brunch-logo v-show="!isDark" />
          <brunch-logo-white v-show="isDark" />
        </a>
        <a href="https://twitter.com/veganmeejisu" target="_blank" title="Twitter">
          <feather-twitter />
        </a>
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
