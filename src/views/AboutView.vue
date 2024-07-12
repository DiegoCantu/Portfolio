<script setup lang="ts">
import { useUrlSelectedStore } from '@/stores/useUrlSelected';
const urlStore = useUrlSelectedStore();

const handleUrlSelection = (newUrl: string) => {
  const _urlStore = useUrlSelectedStore();
  _urlStore.updateSelectedUrl(newUrl);
}
</script>

<template>
  <div class="w-full">
    <label
      class="ml-10 flex flex-col items-center gap-1 justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full"
      @click="handleUrlSelection('')">
      <div class="flex flex-col items-center gap-1 justify-center w-full">
        <p class="font-bold dark:text-white">Regresar</p>
      </div>
    </label>
    <iframe class="w-full h-screen rounded-lg mt-5" :src="urlStore.$state.selectedUrl"></iframe>
  </div>
</template>

