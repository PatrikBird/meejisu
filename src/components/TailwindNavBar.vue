<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-white dark:bg-black">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMenu">
            <span class="sr-only">Open main menu</span>
            <carbon:menu v-if="!openMenu"></carbon:menu>
            <carbon:close v-if="openMenu"></carbon:close>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="../../public/cropped-300-logo.webp"
              alt="Logo" />
            <img
              class="hidden lg:block h-8 w-auto"
              src="../../public/cropped-300-logo.webp"
              alt="Logo" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                href="#"
                class="text-black dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page"
                >Dashboard</a
              >
              <a
                href="#"
                class="text-black dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Team</a
              >
              <a
                href="#"
                class="text-black dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Projects</a
              >
              <a
                href="#"
                class="text-black dark:text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >Calendar</a
              >
            </div>
          </div>
        </div>
        <ToggleTheme />
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="openMenu" id="mobile-menu" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="bg-gray-600 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Dashboard</a
        >
        <a
          href="#"
          class="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Team</a
        >
        <a
          href="#"
          class="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Projects</a
        >
        <a
          href="#"
          class="text-black dark:text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Calendar</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const openMenu = ref(false)
function toggleMenu() {
  openMenu.value = !openMenu.value
}
</script>
