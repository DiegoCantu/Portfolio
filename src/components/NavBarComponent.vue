<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  toggleTheme: any,
  toggleLanguage: any
  isDark: boolean,
  isEnglish: boolean,
}>()

const isOpen = ref(false); // Creación correcta de una referencia reactiva

function toggleMenu() {
  isOpen.value = !isOpen.value; // Uso correcto de '.value' para cambiar el estado
}
</script>

<template>
  <!-- Menú lateral izquierdo -->
  <div :class="['flex xl:hidden fixed left-0 top-0 h-full bg-white dark:bg-slate-800 w-60 transform transition-transform ease-in-out z-50 border-r-2',
    isOpen ? 'translate-x-0' : '-translate-x-full']">
    <div class="p-4">
      <div class="flex items-center gap-2">
        <!-- Logo y nombre -->
        <img class="cursor-pointer block" alt="LinkedIn Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          width="35" height="35" />
        <p class="font-bold text-2xl dark:text-white text-[#007fbc]">LinkedIn</p>
      </div>
      <!-- Enlaces del menú lateral -->
      <div class="mt-8 flex flex-col">
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#portfolio">Portafolio</a>
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#commercialProject">Proyecto
          Comercial</a>
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#experience">Experiencia</a>
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#education">Educación</a>
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#training">Cursos</a>
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#awards">Reconocimientos y
          premios</a>
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#languages">Idiomas</a>
        <a class="cursor-pointer dark:text-white dark:hover:text-blue-600 hover:text-blue-600 hover:underline hover:bg-slate-200 p-3 rounded-lg"
          href="#knowledge">Conocimientos
          y aptitudes</a>
      </div>
    </div>
  </div>

  <div
    class=" bg-white dark:bg-slate-800 h-14 border-b border-slate-200 flex items-center justify-center w-full z-10 sticky top-0">
    <div class="flex items-center justify-around w-full">
      <div class="flex items-center gap-2">
        <img class=" cursor-pointer block" alt="LinkedIn Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          width="35" height="35" />
        <p class="font-bold text-2xl dark:text-white text-[#007fbc]">LinkedIn</p>
      </div>
      <div class="hidden xl:flex items-center gap-2">
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline" href="#portfolio">{{
          $t("portfolio") }}</a>|
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline"
          href="#commercialProject">{{ $t("commercialProject") }}</a>|
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline" href="#experience">Experiencia</a>|
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline" href="#education">Educación</a>|
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline" href="#training">Cursos</a>|
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline" href="#awards">Reconocimientos y
          premios</a>|
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline" href="#languages">Idiomas</a>|
        <a class="cursor-pointer dark:text-white hover:text-blue-600 hover:underline" href="#knowledge">Conocimientos
          y aptitudes</a>
      </div>
      <div class="flex gap-5">
        <div>
          <label
            class="flex items-center justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full"
            for="light-switch" @click="toggleTheme">
            <svg v-if="isDark" class="w-4 h-4" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-current text-slate-400 dark:text-white"
                d="M7 0h2v2H7V0Zm5.88 1.637 1.414 1.415-1.415 1.413-1.414-1.414 1.415-1.414ZM14 7h2v2h-2V7Zm-1.05 7.433-1.415-1.414 1.414-1.414 1.415 1.413-1.414 1.415ZM7 14h2v2H7v-2Zm-4.02.363L1.566 12.95l1.415-1.414 1.414 1.415-1.415 1.413ZM0 7h2v2H0V7Zm3.05-5.293L4.465 3.12 3.05 4.535 1.636 3.121 3.05 1.707Z" />
              <path class="fill-current text-slate-500 dark:text-white"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
            </svg>
            <svg v-else class="w-4 h-4" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path class="fill-current text-slate-500"
                d="M6.2 2C3.2 2.8 1 5.6 1 8.9 1 12.8 4.2 16 8.1 16c3.3 0 6-2.2 6.9-5.2C9.7 12.2 4.8 7.3 6.2 2Z" />
              <path class="fill-current text-slate-500"
                d="M12.5 6a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 6Z" />
            </svg>
          </label>
        </div>
        <div>
          <label
            class="flex items-center justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full"
            @click="toggleLanguage">
            <!-- Muestra 'EN' si isEnglish es true, 'ES' de lo contrario -->
            <span class="w-4 h-4 text-slate-500 dark:text-white text-center  mb-1.5 mr-1 font-semibold">{{ isEnglish ?
              'EN'
              : 'ES'
            }}</span>
          </label>
        </div>
        <div class="flex xl:hidden">
          <label
            class="flex flex-col items-center gap-1 justify-center cursor-pointer w-8 h-8 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full"
            @click="toggleMenu">
            <div class="font-semibold dark:text-white mb-0.5" v-if="isOpen">
              x
            </div>
            <div class="flex flex-col items-center gap-1 justify-center w-full" v-else>
              <hr class="border border-slate-500 dark:border-white w-1/2" />
              <hr class="border border-slate-500 dark:border-white w-3/5" />
              <hr class="border border-slate-500 dark:border-white w-1/2" />
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
