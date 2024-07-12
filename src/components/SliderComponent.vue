<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

defineProps<{
  sectionName: string,
  items: any,
}>()

// Define una referencia reactiva para el índice actual del slide
const currentSlide = ref(0)

// Método para cambiar el slide actual
const slideTo = (index: number) => {
  currentSlide.value = index
}

</script>

<template>
  <p class="ml-3 font-semibold text-xl">{{ sectionName }} ({{ items?.resources?.length }})</p>
  <div class="border rounded-lg p-3 mt-3">
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
      <Slide v-for="(  course, index  ) in   items?.resources  " :key="index">
        <div class="carousel__item w-full ">
          <iframe :src="course.url" class="w-full h-96 rounded-lg" frameborder="0"></iframe>
        </div>
      </Slide>
    </Carousel>
    <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSlide" ref="carousel">
      <Slide v-for="(  course, index  ) in   items?.resources  " :key="index">
        <div class="carousel__item w-full mt-1 cursor-pointer hover:p-1" @click="slideTo(index)">
          <div
            class=" bg-slate-800 dark:bg-slate-950 hover:bg-slate-700 h-32 rounded-lg mr-1 text-white font-bold flex items-center justify-center p-1">
            {{ course.name }}
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
