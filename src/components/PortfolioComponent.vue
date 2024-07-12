<script setup lang="ts">
import { ref, reactive } from 'vue'
import CardSkeleton from './CardSkeleton.vue'
import portfolioInfo from '../data/portfolioInfo'
import { useUrlSelectedStore } from '@/stores/useUrlSelected';

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 100);

const isFlexCol = ref(false); // Creación correcta de una referencia reactiva

function toggleFlex() {
  isFlexCol.value = !isFlexCol.value; // Uso correcto de '.value' para cambiar el estado
}

const portfolio = ref(portfolioInfo);

const tooltipState = reactive(new Map());

const generateTooltipKey = (resourceName: any, technologyName: any) => `${resourceName}-${technologyName}`;

const onMouseEnter = (resourceName: any, technologyName: any) => {
  const key = generateTooltipKey(resourceName, technologyName);
  tooltipState.set(key, true);
};

const onMouseLeave = (resourceName: any, technologyName: any) => {
  const key = generateTooltipKey(resourceName, technologyName);
  tooltipState.set(key, false);
};

const isTooltipVisible = (resourceName: any, technologyName: any) => {
  const key = generateTooltipKey(resourceName, technologyName);
  return tooltipState.get(key) || false;
};

const handleUrlSelection = (newUrl: string) => {
  const urlStore = useUrlSelectedStore();
  urlStore.updateSelectedUrl(newUrl);
}
</script>

<template>
  <div v-if="isLoading">
    <CardSkeleton />
  </div>
  <div v-else>
    <div class="flex justify-between mb-3">
      <p class="ml-3 font-semibold text-xl dark:text-white">Portafolio</p>
      <div @click="toggleFlex" class="flex cursor-pointer mr-6 gap-2 w-fit">
        <!-- Muestra esta imagen solo si isFlexCol es true -->
        <img v-if="isFlexCol" class="w-6 h-6 hover:bg-slate-200" alt="LinkedIn Profile Image"
          src="https://cdn-icons-png.flaticon.com/256/166/166472.png" />

        <!-- Muestra esta imagen solo si isFlexCol es false -->
        <img v-else class="w-6 h-6 hover:bg-slate-200" alt="LinkedIn Profile Image"
          src="https://www.svgrepo.com/show/8335/list.svg" />
      </div>
    </div>
    <div class="flex justify-center flex-wrap gap-5 ">
      <div v-for="  resource   in   portfolio.resources  " :key="resource.name"
        :class="`dark:bg-slate-900 p-3 rounded-lg shadow-xl ${!isFlexCol ? 'flex flex-col w-full sm:w-96' : 'flex w-full'}`">
        <div>
          <div :class="`${!isFlexCol ? 'flex justify-between' : 'flex flex-col w-full'}`">
            <h2 class="font-semibold dark:text-white">{{ resource.name }}</h2>
            <div :class="`${!isFlexCol ? 'flex justify-between' : 'flex flex-col w-48'} gap-1`">
              <h2 class="font-semibold dark:text-white">Categoría:</h2>
              <!-- Dividir las categorias y mostrar cada uno en su propio párrafo -->
              <div class="flex flex-row flex-wrap gap-1">
                <p class="border rounded-lg p-1 w-fit text-xs dark:text-white"
                  v-for="  category   in   resource.category.split(',')  " :key="category">
                  {{ category }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center w-full bg-slate-800 p-2 mt-1">
            <a class="font-semibold cursor-pointer " @click="handleUrlSelection(resource.url)">
              <img class=" rounded-lg w-40 h-40 hover:rounded-full" alt="LinkedIn Profile Image" :src="resource.image" />
            </a>
          </div>
        </div>
        <div class="p-5">
          <div class="flex gap-1 mt-1">
            <p class="font-semibold mt-1 mr-1 dark:text-white">Tecnologías:</p>
            <div class="flex flex-row flex-wrap gap-1">
              <div v-for="  technology   in   resource.technologies  " :key="technology.name" class="relative">
                <img @mouseenter="onMouseEnter(resource.name, technology.name)"
                  @mouseleave="onMouseLeave(resource.name, technology.name)" :src="technology.icon"
                  class="border rounded-full w-7 h-7 p-1">
                <div v-if="isTooltipVisible(resource.name, technology.name)"
                  class="absolute bottom-full mb-2 w-auto p-2 bg-gray-700 text-white text-xs rounded-md">
                  {{ technology.name }}
                </div>
              </div>
            </div>
          </div>
          <p class="font-semibold mt-1 dark:text-white">Descripción:</p>
          <p class="dark:text-white">{{ resource.description }}</p>
          <p class="font-semibold mt-1 dark:text-white">Dependencias:</p>
          <!-- Dividir los tags y mostrar cada uno en su propio párrafo -->
          <div class="flex flex-row flex-wrap gap-1">
            <p class="border rounded-lg p-1 w-fit text-xs dark:text-white" v-for="  tag   in   resource.tags.split(',')  "
              :key="tag">
              {{ tag }}
            </p>
          </div>
          <p class="font-semibold mt-1 dark:text-white">APIs:</p>
          <div class="flex flex-row flex-wrap gap-1">
            <a class="w-fit text-xs hover:underline text-blue-500 dark:text-white hover:text-blue-700" target="_blank"
              v-for="  api   in   resource.apis.split(',')  " :href="api" :key="api">
              {{ api }} ·
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
