<script setup lang="ts">
const scrollToContact = () => {
  const contactElement = document.getElementById('contact');
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<template>
  <div class=" w-full  2xl:w-3/4 border rounded-lg shadow-md bg-white dark:bg-slate-800 relative">
    <!-- Banner Component -->
    <div class="">
      <img class="w-full rounded-t-lg" alt="LinkedIn Banner"
        src="https://static.licdn.com/aero-v1/sc/h/55k1z8997gh8dwtihm11aajyq" />
    </div>
    <!-- Profile Image Component -->
    <div class="absolute top-10 sm:top-20 md:top-24 lg:top-24 xl:top-32 2xl:top-24 left-7 ">
      <img class="rounded-full border-4 border-white w-40 h-40" alt="LinkedIn Profile Image"
        src="https://media.licdn.com/dms/image/C5603AQFO2wxEilxaKg/profile-displayphoto-shrink_200_200/0/1653345753161?e=1726099200&v=beta&t=004E8onf7WarvMkylhzfT3WZRzEaPVEY4jiEqs3KTy0" />
    </div>
    <!-- Profile Detail Component -->
    <div class="mt-20  mb-5">
      <h1 class="flex items-center font-semibold ml-10 dark:text-white gap-1"
        style="font-size: 24px; font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; word-break: break-word;">
        Diego Cantú
        <img class="rounded-full w-6 h-6" alt="LinkedIn Profile Image"
          src="https://cdn4.iconfinder.com/data/icons/shopping-set-1/512/10-512.png" />
      </h1>
      <div class="flex flex-col md:flex-row ml-10">
        <div class="flex-col pr-3">
          <p class=" w-full dark:text-white">
            Desarrollador Senior Full Stack - Angular | React | Next.js | Node.js | C# | .NET Core | MSSQL | Python
            |
            Flask | Html5 | CSS3 | Tailwind | Bootstrap | Material UI | Xamarin | SAP UI5 - CPI | AWS DynamoDB - S3
            -
            Lambda
          </p>
          <div class="">
            <p class="mt-3 mb-3 text-sm text-slate-500 dark:text-white font-light">
              Monterrey, Nuevo León, México
            </p>
            <p class="mt-3 mb-3 text-sm font-semibold hover:underline text-[#0a66c2] dark:text-white">
              1547 seguidores · Más de 500 contactos
            </p>
          </div>
        </div>
        <div>
          <div class="flex w-56 gap-1">
            <img class="rounded-full w-8 h-8" alt="LinkedIn Profile Image"
              src="https://media.licdn.com/dms/image/D560BAQEODQMkaRWE8g/company-logo_100_100/0/1701444984565?e=1729123200&v=beta&t=jC2kH04CK9jO_4wNgujZ5mOCdz87_qLqgSerB1zwohg" />
            <p class=" text-sm hover:underline hover:text-blue-600 dark:text-white" style="font-weight: 550; ">Universidad
              Autónoma
              de Nuevo León</p>
          </div>
          <div class="flex items-center w-56 gap-1 mt-2">
            <img class="rounded-full w-8 h-8" alt="LinkedIn Profile Image"
              src="https://media.licdn.com/dms/image/D560BAQFn4vz687jwSw/company-logo_200_200/0/1664234959347/iexeuniversidad_logo?e=1729123200&v=beta&t=eyTLEl4FZzfpl2BTQNyEDbR_9Ev20je9gCtAmkto0oQ" />
            <p class=" text-sm hover:underline hover:text-blue-600 dark:text-white" style="font-weight: 550; ">IEXE
              Universidad</p>
          </div>
          <div class="mt-5 flex md:justify-center">
            <div @click="scrollToContact"
              class="px-12 py-1 rounded-3xl w-fit text-center  cursor-pointer hover:bg-blue-900 bg-[#0a66c2]">
              <p class="font-bold text-white">Contacto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
