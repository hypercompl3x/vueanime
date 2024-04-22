<script setup lang="ts">
import { ref } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import type { Anime } from '../lib/types'
import { getAllAnime } from '@/lib/services/animeServices';

const loading = ref(false)
const error = ref("")
const animeList = ref<Anime[]>([])

const fetchAnime = async () => {
  loading.value = true
  const { data, error: fetchError } = await getAllAnime()

  if (data) {
    animeList.value = data
  } else {
    error.value = "An unexpected error has occured"
  }
  error.value = fetchError
  loading.value = false
}
fetchAnime()
</script>

<template>
  <main class="h-full bg-surface-0 dark:bg-primary-900 flex justify-center">
    <div class="max-w-screen-xl pt-8 flex flex-col items-center gap-y-8 w-full">
      <div class="px-4 w-full">
        <IconField iconPosition="left" class="w-full">
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText placeholder="Search" />
        </IconField>
      </div>
      <i v-if="loading" class="pi pi-spinner animate-spin text-primary-950 text-3xl" />
      <div v-if="error" class="text-center text-red-600 text-xl">{{ error }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-5 place-items-center">
        <div v-for="anime in animeList" :key="anime._id"
          class="flex flex-col items-center gap-y-2 w-fit h-fit group hover:cursor-pointer">
          <img :src="anime.image" :alt="anime.title" class="rounded-lg group-hover:opacity-85" />
          <div class="text-center text-sm font-semibold group-hover:text-primary-800">{{ anime.title }}</div>
        </div>
      </div>
    </div>
  </main>
</template>
