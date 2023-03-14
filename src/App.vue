<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="leading-normal max-h-screen">
    <div class="wrapper">
      <h1 class="text-3xl font-bold flex justify-center items-center">Roll'n'conquer</h1>

      <nav class="w-full text-base text-center mt-8">
        <RouterLink
          to="/"
          class="inline-block py-0 px-4 text-gray-900 hover:text-gray-900"
          active-class="text-green-600 hover:text-green-500"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="inline-block py-0 px-4 text-gray-900 hover:text-gray-900"
          active-class="text-green-600 hover:text-green-500"
          >About</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>
