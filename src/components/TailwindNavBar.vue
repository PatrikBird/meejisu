<script setup lang="ts">
const openMenu = ref(false)
function toggleMenu() {
  openMenu.value = !openMenu.value
}
</script>

<template>
  <nav class="bg-white dark:bg-black">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <carbon:menu v-if="!openMenu"></carbon:menu>
            <carbon:close v-if="openMenu"></carbon:close>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/" class="font-medium text-gray-900 dark:text-white">
              <img class="block lg:hidden h-8 w-auto" src="/cropped-300-logo.webp" alt="Logo" />
              <img class="hidden lg:block h-8 w-auto" src="/cropped-300-logo.webp" alt="Logo" />
            </router-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- desktop menu items -->
              <router-link
                to="/projects"
                class="text-black dark:text-white hover:text-teal-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
              >Projects</router-link>
            </div>
          </div>
        </div>
        <ToggleTheme />
      </div>
    </div>

    <!-- mobile menu -->
    <div v-if="openMenu" id="mobile-menu" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          to="/projects"
          class="hover:text-teal-600 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
        >Projects</router-link>
      </div>
    </div>
  </nav>
</template>
