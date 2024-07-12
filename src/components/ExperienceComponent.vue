<script setup lang="ts">
import { ref } from 'vue'
import experienceInfo from '../data/experienceInfo'

const companies = ref(experienceInfo);

</script>

<template>
  <div class="flex flex-col justify-between mb-3">
    <p class="ml-3 font-semibold text-xl mb-3">Experiencia</p>
    <ol class="relative border-s border-gray-200 dark:border-white  ml-3" v-for="  resource   in   companies.resources  "
      :key="resource.name">
      <li class="mb-10 ms-6">
        <span
          class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-2 ring-white dark:ring-white dark:bg-blue-900">
          <svg class="w-2.5 h-2.5 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <div class="flex gap-3 p-3 items-center ">
          <div>
            <img class="  w-12 rounded-sm " alt="LinkedIn Profile Image" :src="resource.image" />
          </div>
          <div class="flex flex-col">
            <h3 class="flex items-center mt-3 text-lg font-semibold text-gray-900 dark:text-white">
              {{ resource.name }}
            </h3>
            <h3 class="font-semibold text-gray-900 dark:text-white">
              {{ resource.job }}
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400  dark:text-white">{{
              resource.date }}</time>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-white">{{
              resource.location }}</time>
          </div>
        </div>
        <p class="mb-5 text-base font-normal text-gray-700 dark:text-white"> {{ resource.description }}</p>
        <ol class="relative border-s border-gray-200 dark:border-white" v-for="  project   in   resource.projects  "
          :key="project.name">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:bg-white">
            </div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">{{ project.date
            }}</time>
            <h3 v-if="project.assigned" class="flex gap-3">
              <img class="  w-12 rounded-sm " alt="LinkedIn Profile Image" :src="project.image" />
              <div>
                <p class="text-sm text-gray-900 dark:text-white font-semibold">Cliente:</p>
                <p class="text-md font-semibold text-gray-900 dark:text-white">{{ project.assigned }}</p>
              </div>
            </h3>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ project.name }}
            </h3>
            <p class="mb-2 text-base font-normal text-gray-700 dark:text-white"
              v-for="(  description, index  ) in   project.description  " :key="index">
              • {{ description }}</p>
            <hr />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Tecnologías
            </h3>
            <div class="flex flex-row flex-wrap gap-1">
              <p class="border rounded-lg p-1 w-fit text-xs"
                v-for="(  technology, index  ) in   project.technologies.split(',')  " :key="index">
                {{ technology }}
              </p>
            </div>
          </li>
          <hr class="ml-3 mt-3" />
        </ol>
      </li>
      <hr />
    </ol>
  </div>
</template>
