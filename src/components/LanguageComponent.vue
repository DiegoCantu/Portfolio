<script setup lang="ts">
import computrabajoIngles from '@/assets/computrabajoIngles.png'
</script>

<template>
  <p class="ml-3 font-semibold text-xl">Idiomas</p>
  <div class="flex flex-col gap-3 p-3">
    <div>
      <p class="font-semibold">Español</p>
      <p class="text-slate-400 dark:text-white">Competencia bilingüe o nativa</p>
    </div>
    <hr />
    <div>
      <p class="font-semibold">Ingles</p>
      <p class="text-slate-400 dark:text-white">Competencia intermedia</p>
      <div class="p-3 border rounded-lg mt-2">
        <img class="w-36  rounded-lg" alt="LinkedIn Profile Image"
          src="https://bolsatrabajo.munimolina.gob.pe/wp-content/uploads/2023/05/computrabajo.png" />
        <img class="w-fit rounded-lg" alt="LinkedIn Profile Image" :src="computrabajoIngles" />
      </div>
      <div class="p-3 border rounded-lg mt-2">
        <img class=" w-28" alt="LinkedIn Profile Image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Busuu_logo.svg/2560px-Busuu_logo.svg.png" />
        <iframe class="rounded-lg w-full mt-2" alt="LinkedIn Profile Image"
          src="/7e34923fc3bacb9c4dc3dc24cd338552.pdf"></iframe>
      </div>
      <div class="p-3 border rounded-lg mt-2">
        <p class="font-bold text-slate-600 dark:text-white">Empresas en las que he trabajado con ingles intermedio:</p>
        <p class="font-semibold">Accely - SONOS</p>
        <p class="font-semibold">Accely - Nordic Naturals</p>
        <p class="font-semibold">Blueriver - Becton Dickinson</p>
        <p class="font-semibold">Blueriver - Blackbaud</p>
      </div>
    </div>
  </div>
</template>
