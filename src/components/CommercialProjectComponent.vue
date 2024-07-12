<script setup lang="ts">
import { ref } from 'vue'
import HorizontalSkeleton from './HorizontalSkeleton .vue'

const isLoading = ref(true);

setTimeout(() => {
  isLoading.value = false;
}, 100);
</script>

<template>
  <div v-if="isLoading">
    <HorizontalSkeleton />
  </div>
  <div class="dark:text-white" v-else>
    <p class="ml-3 font-semibold text-xl dark:text-white">Proyecto Comercial</p>
    <div class="flex flex-col flex-wrap gap-5 p-3">
      <div class="flex flex-col gap-2">
        <a class="font-semibold text-xl text-blue-500 dark:text-white hover:underline hover:text-blue-600" target="_blank"
          href="https://www.redy.mx/normas-oficiales-mexicanas">Redy
          NOM-035-STPS-2018</a>
        <p class="font-semibold dark:text-white">Plataforma digital en línea que automatiza la implementación de la
          NOM035 para identificar, analizar y prevenir los factores de riesgo psicosocial en el trabajo a través de
          mecanismos de envío como email y SMS donde los resultados están disponibles de forma instantánea,
          en el momento exacto en que los empleados finalizan la encuesta.</p>
        <div class="p-3 border rounded-lg">
          <p class="font-bold text-lg dark:text-white">Tecnologías:</p>
          <div class="flex flex-wrap justify-center gap-3 mt-3">
            <div class="flex flex-wrap border rounded-lg">
              <div class="flex flex-col gap-2 w-fit p-3 dark:text-white">
                <p class="font-semibold">Servicios Cloud:</p>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS DynamoDB</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS S3</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS CloudFront</p>
                </div>
              </div>
              <div class="flex flex-col gap-2 w-fit p-3">
                <p class="font-semibold">&nbsp;</p>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Business-Applications/Simple-Email-Service.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS SES</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Notification-Service.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS SNS</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Queue-Service.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS SQS</p>
                </div>
              </div>
              <div class="flex flex-col gap-2 w-fit p-3">
                <p class="font-semibold">&nbsp;</p>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/App-Integration/EventBridge.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS EventBridge</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Developer-Tools/CodeCommit.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS CodeCommit</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS API Gateway</p>
                </div>
              </div>
              <div class="flex flex-col gap-2 w-fit p-3">
                <p class="font-semibold">&nbsp;</p>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Compute/Serverless-Application-Repository.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS SAM</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Front-End-Web-Mobile/Amplify.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS Amplify Hosting</p>
                </div>
                <div class="flex gap-2 items-center">
                  <img src="https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg"
                    class="border rounded-full w-10 h-10 p-0.5">
                  <p>AWS Lambda</p>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-2 border rounded-lg w-full sm:w-fit p-3">
              <p class="font-semibold">Frontend:</p>
              <div class="flex gap-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Typescript</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Next.js</p>
              </div>
              <div class="flex gap-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>React</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" class="border rounded-full w-10 h-10 p-0.5">
                <p>Redux Toolkit</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://tsh.io/wp-content/uploads/2023/02/zustand-react-small.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Zuztand</p>
              </div>
              <div class="flex gap-2 items-center">
                <img
                  src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Tailwind.css</p>
              </div>
            </div>
            <div class="flex flex-col gap-2 border rounded-lg w-full sm:w-fit p-3">
              <p class="font-semibold">Backend:</p>
              <div class="flex gap-2 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Typescript</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Node.js</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://next-safe-action.dev/img/logo.svg" class="border rounded-full w-10 h-10 p-0.5">
                <p>Server Actions</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>GO - Golang</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" class="border rounded-full w-10 h-10 p-0.5">
                <p>JWT</p>
              </div>
            </div>
            <div class="flex flex-col gap-2 border rounded-lg w-full sm:w-fit p-3">
              <p class="font-semibold">Herramientas:</p>
              <div class="flex gap-2 items-center">
                <img
                  src="data:image/png;base64,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"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Docker</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://miro.medium.com/v2/resize:fit:1024/1*c70NIvFU5GYoU-XL_WvUGg.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>NoSQLWorkbench</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Git</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://cdnlogo.com/logos/v/82/visual-studio-code.svg"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Visual Studio Code</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/yarn_original_logo_icon_146287.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Yarn</p>
              </div>
            </div>
            <div class="flex flex-col gap-2 border rounded-lg w-full sm:w-fit p-3">
              <p class="font-semibold">Integraciónes:</p>
              <div class="flex gap-2 items-center">
                <img src="https://cdn.icon-icons.com/icons2/3913/PNG/512/mercadopago_logo_icon_248494.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>MercadoPago</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>PayPal</p>
              </div>
              <div class="flex gap-2 items-center">
                <img
                  src="https://cdn.freelogovectors.net/wp-content/uploads/2023/08/stripe_logo-freelogovectors.net_-180x113.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Stripe</p>
              </div>
              <div class="flex gap-2 items-center">
                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/google_recaptcha_logo_icon_170062.png"
                  class="border rounded-full w-10 h-10 p-0.5">
                <p>Google Recaptcha</p>
              </div>
            </div>
            <div class="flex border rounded-lg">
              <div class="flex flex-col gap-2 w-fit p-3">
                <p class="font-semibold">Dependencias:</p>
                <div class="flex flex-col gap-3">
                  <div class="flex flex-col border rounded-lg p-3">
                    <div class="flex gap-1 items-center">
                      <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                        class="border rounded-full w-10 h-10 p-0.5">
                      <p class="font-semibold">NodeJs:</p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @aws-sdk/client-dynamodb
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @aws-sdk/client-s3
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @aws-sdk/client-ses
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @aws-sdk/client-sns
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @aws-sdk/client-sqs
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @aws-sdk/lib-dynamodb
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @aws-sdk/signature-v4-crt
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @headlessui/react
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @next/bundle-analyzer
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @paypal/react-paypal-js
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @reduxjs/toolkit
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @stripe/react-stripe-js
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @stripe/stripe-js
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        @theme-toggles/react
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        autoprefixer
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        aws-crt
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        chart.js
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        driver.js
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        encoding
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        html2canvas
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        jsonwebtoken
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        jspdf
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        jspdf-autotable
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        luxon
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        mercadopago
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        next
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        postcss
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-awesome-slider
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-chartjs-2
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-colorful
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-confetti
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-d3-speedometer
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-d3-tree
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-device-detect
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-google-recaptcha-v3
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-hook-form
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-icons
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-loading-skeleton
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-redux
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-simple-star-rating
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-toastify
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-tooltip
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        react-vertical-timeline-component
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        redux-persist
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        sweetalert2
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        tailwindcss
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        tailwindcss-tables
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        typescript
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        uuid
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        xlsx
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        xlsx-js-style
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        zustand
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        sharp
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col border rounded-lg p-3">
                    <div class="flex gap-1 items-center">
                      <img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                        class="border rounded-full w-10 h-10 p-0.5">
                      <p class="font-semibold">Golang - Go:</p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-lambda-go/lambda
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/aws
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/aws/credentials
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/aws/session
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/service/dynamodb
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/service/ses
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/service/sns
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        github.com/aws/aws-sdk-go/service/sqs
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        encoding/json
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        fmt
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        log
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        runtime/debug
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        strconv
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        time
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        sync
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        os
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        net/mail
                      </p>
                      <p class="border rounded-lg p-1 w-fit text-xs">
                        strings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col border rounded-lg p-3 gap-2">
          <p class="font-semibold text-lg">Códigos de promoción del 10% de descuento:</p>
          <div class="flex flex-wrap justify-around">
            <div class="p-1">
              <p class="font-semibold">Paquete PYME:</p>
              <p class="font-semibold underline">50 envíos</p>
              <p>DPYME10</p>
            </div>
            <div class="p-1">
              <p class="font-semibold">Paquete Empresarial:</p>
              <p class="font-semibold underline">150 envíos</p>
              <p>DEMP10</p>
            </div>
            <div class="p-1">
              <p class="font-semibold">Paquete Empresarial Plus:</p>
              <p class="font-semibold underline">350 envíos</p>
              <p>DEMP+10</p>
            </div>
          </div>
        </div>
        <div class="p-3 border rounded-lg">
          <iframe class="w-full h-screen " src="https://www.redy.mx/normas-oficiales-mexicanas"></iframe>
        </div>
        <div class="p-3 border rounded-lg">
          <p class="ml-3 font-semibold text-xl">Demostración:</p>
          <hr class="mb-3" />
          <div style="padding:56.25% 0 0 0;position:relative;">
            <iframe src="https://player.vimeo.com/video/926444066?badge=0&autopause=0&player_id=0&app_id=58479"
              frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Demo Redy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
