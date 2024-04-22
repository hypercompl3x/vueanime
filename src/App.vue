<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

const LINKS = [{ name: "Anime", path: "/anime" }, { name: "Manga", path: "/manga" }]
</script>

<template>
  <div class="min-h-screen h-full flex flex-col">
    <header class="w-full h-16 bg-primary-800 flex items-center px-4 sm:px-16 gap-x-10 text-surface-0">
      <RouterLink to="/" class="font-bold text-xl sm:text-3xl hover:text-primary-500">
        VUE ANIME
      </RouterLink>
      <div class="flex items-center gap-x-4 font-semibold max-sm:text-sm">
        <RouterLink v-for="{ name, path } in LINKS" :to="path" :key="name" class="hover:text-primary-500">
          {{ name }}
        </RouterLink>
      </div>
    </header>
    <div class="grow flex w-full">
      <div class="w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>
