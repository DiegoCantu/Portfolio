<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { useLanguageStore } from './stores/useLanguageStore';
import NavBarComponent from './components/NavBarComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import PortfolioComponent from './components/PortfolioComponent.vue'
import AboutView from './views/AboutView.vue'
import CommercialProjectComponent from './components/CommercialProjectComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'
import EducationComponent from './components/EducationComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import LanguageComponent from './components/LanguageComponent.vue'
import KnowledgeComponent from './components/KnowledgeComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import coursesInfo from './data/coursesInfo'
import awardsInfo from './data/awardsInfo'
import { useUrlSelectedStore } from './stores/useUrlSelected';

const { t, locale } = useI18n({ useScope: 'global' })

const courses = ref(coursesInfo);
const awards = ref(awardsInfo);

const isDark = ref(false); // Creación correcta de una referencia reactiva

function toggleTheme() {
  isDark.value = !isDark.value; // Uso correcto de '.value' para cambiar el estado
}

const isEnglish = ref(false); // Creación correcta de una referencia reactiva

function toggleLanguage() {
  isEnglish.value = !isEnglish.value; // Uso correcto de '.value' para cambiar el estado
  useLanguageStore().toggleLanguage();
  locale.value = useLanguageStore().$state.isEnglish ? 'en' : 'es';
}


const urlStore = useUrlSelectedStore();

</script>

<template>
  <div :class="isDark ? 'dark bg-slate-900 flex flex-col items-center' : 'bg-[#f4f2ee] flex flex-col items-center'">
    <!-- Construction Notice -->
    <div class="w-full bg-yellow-400 text-black text-center py-2 font-bold">
      Este sitio está en construcción. Algunas funcionalidades pueden no estar disponibles.
    </div>
    <!-- NavBar Component -->
    <NavBarComponent :toggleTheme="toggleTheme" :toggleLanguage="toggleLanguage" :isDark="isDark"
      :isEnglish="isEnglish" />
    <!-- Body Component -->
    <div
      class="flex flex-col items-center mt-5 justify-center w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-4/6 2xl:w-3/5 ">
      <!-- HeaderComponent -->
      <HeaderComponent />
      <div id="portfolio"
        :class="[urlStore.$state.selectedUrl === '' ? '2xl:w-9/12' : ' w-screen', 'border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4']">
        <!-- PortfolioComponent -->
        <div v-if="urlStore.$state.selectedUrl === ''">
          <PortfolioComponent />
        </div>
        <div v-else>
          <AboutView />
        </div>
      </div>
      <div id="commercialProject"
        class="w-full 2xl:w-9/12 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4">
        <!-- CommercialProjectComponent -->
        <CommercialProjectComponent />
      </div>
      <div id="experience"
        class="w-full 2xl:w-9/12 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4 dark:text-white">
        <!-- ExperienceComponent -->
        <ExperienceComponent />
      </div>
      <div id="education"
        class="w-full 2xl:w-9/12 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4 dark:text-white">
        <!-- EducationComponent -->
        <EducationComponent />
      </div>
      <div id="training"
        class="w-full 2xl:w-9/12 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4 dark:text-white">
        <!-- SliderComponent -->
        <SliderComponent sectionName="Cursos" :items="courses" />
      </div>
      <div id="awards"
        class="w-full 2xl:w-9/12 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4 dark:text-white">
        <!-- SliderComponent -->
        <SliderComponent sectionName="Reconocimientos y premios" :items="awards" />
      </div>
      <div id="languages"
        class="w-full 2xl:w-9/12 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4 dark:text-white">
        <!-- LanguageComponent -->
        <LanguageComponent />
      </div>
      <div id="knowledge"
        class="w-full 2xl:w-9/12 flex flex-col gap-3 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4 dark:text-white">
        <!-- KnowledgeComponent -->
        <KnowledgeComponent />
      </div>
      <div id="contact"
        class="w-full 2xl:w-9/12 border rounded-lg shadow-md bg-white dark:bg-slate-800 mt-2 p-4 dark:text-white">
        <!-- ContactComponent -->
        <ContactComponent />
      </div>
      <FooterComponent />
    </div>
  </div>
  <RouterView />
</template>

<style scoped></style>
