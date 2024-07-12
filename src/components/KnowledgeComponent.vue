<script setup lang="ts">
import { ref } from 'vue'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'vue-chartjs';

// Registro global de componentes necesarios de Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Suponiendo que chartConfig exporta un objeto con las propiedades `data` y `options`
// Datos para el gráfico
const data = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'C#',
            backgroundColor: '#4122aa',
            data: [0, 1, 2, 0, 0, 3, 4, 5, 6, 7, 0, 0],
        },
        {
            label: 'NodeJs',
            backgroundColor: '#417e38',
            data: [0, 0, 0, 0, 1, 2, 3, 4, 0, 5, 6, 7],
        },
        {
            label: 'Groovy',
            backgroundColor: '#5e97b6',
            data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        },
        {
            label: 'Python',
            backgroundColor: '#ffdd53',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        },
        {
            label: 'Go',
            backgroundColor: '#007d9c',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2],
        }
    ],
});

const backendFrameworks = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'ASP.NET / ADO.NET / .NET Framework',
            backgroundColor: '#4122aa',
            data: [0, 1, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0],
        },
        {
            label: 'ADO.NET / .NET Core',
            backgroundColor: '#8979c1',
            data: [0, 0, 0, 0, 0, 0, 4, 5, 6, 7, 0, 0],
        },
        {
            label: 'Express',
            backgroundColor: '#417e38',
            data: [0, 0, 0, 0, 1, 2, 3, 4, 0, 5, 6, 7],
        },
        {
            label: 'Flask',
            backgroundColor: '#ffdd53',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        }
    ],
});

const backendUnitTest = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'Xunit',
            backgroundColor: '#4122aa',
            data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0],
        },
        {
            label: 'Specflow',
            backgroundColor: '#8979c1',
            data: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        },
    ],
});

const sqlDatabase = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'MS SQL Server',
            backgroundColor: '#a1a0a4',
            data: [0, 1, 2, 0, 0, 3, 4, 5, 6, 7, 0, 0],
        },
        {
            label: 'SAP ASE',
            backgroundColor: '#06a6e6',
            data: [0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0],
        },
        {
            label: 'MySQL',
            backgroundColor: '#dd8a00',
            data: [0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0],
        },
        {
            label: 'SQLite',
            backgroundColor: '#67b6e1',
            data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        },
        {
            label: 'PostgreSQL',
            backgroundColor: '#31648c',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        }
    ],
});

const sqlORMDatabase = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: '.NET Entity Framework',
            backgroundColor: '#652076',
            data: [0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 0, 0],
        },
        {
            label: 'Sequelize',
            backgroundColor: '#52b0e7',
            data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0],
        },
        {
            label: 'SQL Alchemy',
            backgroundColor: '#c31935',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        }
    ],
});

const noSqlDatabase = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'Documento - MongoDB - Mongoose',
            backgroundColor: '#4da53f',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        },
        {
            label: 'Documento - Llave / Valor - DynamoDB - aws-lib-dynamodb',
            backgroundColor: '#f4911d',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
        },
    ],
});

const frontend = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'JavaScript',
            backgroundColor: '#efd81d',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        },
        {
            label: 'TypeScript',
            backgroundColor: '#2f74c0',
            data: [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6],
        },
    ],
});

const frontendFrameworks = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'Web Forms',
            backgroundColor: '#673ab7',
            data: [0, 1, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0],
        },
        {
            label: 'Razor Pages / MVC',
            backgroundColor: '#9c27b0',
            data: [0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0],
        },
        {
            label: 'SAP UI5',
            backgroundColor: '#0070f2',
            data: [0, 0, 1, 2, 3, 0, 4, 5, 0, 0, 0, 0],
        },
        {
            label: 'Angular',
            backgroundColor: '#d6002f',
            data: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 0, 0],
        },
        {
            label: 'Nextjs',
            backgroundColor: '#000000',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
        },
        {
            label: 'Vue.js',
            backgroundColor: '#3fb27f',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        },
    ],
});


const frontendLibraries = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'JQuery',
            backgroundColor: '#71ab41',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 0, 0, 0, 0],
        },
        {
            label: 'React',
            backgroundColor: '#1399c4',
            data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5],
        }
    ],
});

const frontendUnitTest = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'Karma / Jasmine ',
            backgroundColor: '#863f7e',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0],
        }
    ],
});

const frontendCSS = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'CSS',
            backgroundColor: '#2962e9',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        },
        {
            label: 'Bootstrap',
            backgroundColor: '#6f11ef',
            data: [0, 0, 0, 1, 2, 3, 4, 5, 0, 0, 0, 0],
        },
        {
            label: 'MaterialUI ',
            backgroundColor: '#007bf7',
            data: [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 0, 0],
        },
        {
            label: 'Tailwind.css ',
            backgroundColor: '#15b8c5',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3],
        }
    ],
});

const movil = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'Xamarin',
            backgroundColor: '#3293d4',
            data: [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0],
        },
        {
            label: 'React Native',
            backgroundColor: '#1d253b',
            data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        }
    ],
});

const middleware = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'WebMethods Software AG',
            backgroundColor: '#0796c4',
            data: [0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0],
        },
        {
            label: 'SAP Cloud Platform Integration',
            backgroundColor: '#256eb8',
            data: [0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0],
        }
    ],
});

const cloudServices = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'SAP',
            backgroundColor: '#256eb8',
            data: [0, 0, 0, 0, 1, 0, 2, 3, 0, 0, 0, 0],
        },
        {
            label: 'Azure',
            backgroundColor: '#0174cd',
            data: [0, 0, 0, 0, 0, 1, 0, 2, 3, 4, 0, 0],
        },
        {
            label: 'AWS',
            backgroundColor: '#f79400',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4],
        }
    ],
});

const methodologies = ref({
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
        {
            label: 'Waterfall',
            backgroundColor: '#426ed3',
            data: [0, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0],
        },
        {
            label: 'Scrum',
            backgroundColor: '#256eb8',
            data: [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7],
        },
        {
            label: 'Safe',
            backgroundColor: '#949698',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0],
        }
    ],
});


// Opciones para el gráfico
const options = ref({
    // responsive: true,
    // maintainAspectRatio: false,
});
</script>

<template>
    <p class="ml-3 font-semibold text-xl">Conocimientos y aptitudes</p>
    <div class="flex flex-col gap-3 p-3 border rounded-lg">
        <p class="font-semibold mt-1 mr-1 text-lg">Backend:</p>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Lenguajes:</p>
            <Line :data="data" :options="options" />
        </div>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Frameworks:</p>
            <Line :data="backendFrameworks" :options="options" />
        </div>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Unit Test:</p>
            <Line :data="backendUnitTest" :options="options" />
        </div>
    </div>
    <hr />
    <div class="flex flex-col gap-3 p-3 border rounded-lg">
        <p class="font-semibold mt-1 mr-1 text-lg">Base de datos:</p>
        <div class="flex flex-col gap-3  p-3 border rounded-lg">
            <p class="font-semibold mt-1 mr-1">SQL:</p>
            <div class="flex flex-col gap-3 p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
                <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Motores:</p>
                <Line :data="sqlDatabase" :options="options" />
            </div>
            <div class="flex flex-col gap-3 p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
                <p class="font-semibold mt-1 mr-1 dark:text-slate-950">ORM:</p>
                <Line :data="sqlORMDatabase" :options="options" />
            </div>
        </div>
        <div class="p-3 border rounded-lg">
            <p class="font-semibold mt-1 mr-1">NoSQL:</p>
            <div class="flex flex-col gap-3 mt-3 p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
                <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Motores: ODM / Cliente</p>
                <Line :data="noSqlDatabase" :options="options" />
            </div>
        </div>
    </div>
    <hr />
    <div class="flex flex-col gap-3 p-3 border rounded-lg">
        <p class="font-semibold mt-1 mr-1 text-lg">Frontend:</p>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Lenguajes / Superset:</p>
            <Line :data="frontend" :options="options" />
        </div>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Frameworks:</p>
            <Line :data="frontendFrameworks" :options="options" />
        </div>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Librerias:</p>
            <Line :data="frontendLibraries" :options="options" />
        </div>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Unit Test:</p>
            <Line :data="frontendUnitTest" :options="options" />
        </div>
        <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
            <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Procesadores de estilo:</p>
            <Line :data="frontendCSS" :options="options" />
        </div>
    </div>
    <hr />
    <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
        <p class=" font-semibold mt-1 mr-1 text-lg dark:text-slate-950">Móvil:</p>
        <Line :data="movil" :options="options" />
    </div>
    <hr />
    <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
        <p class=" font-semibold mt-1 mr-1 text-lg dark:text-slate-950">Middleware:</p>
        <Line :data="middleware" :options="options" />
    </div>
    <hr />
    <div class="p-3 border rounded-lg dark:bg-opacity-80 dark:bg-white">
        <p class="font-semibold mt-1 mr-1 text-lg dark:text-slate-950">Cloud:</p>
        <Line :data="cloudServices" :options="options" />
    </div>
    <hr />
    <div class="p-3 border rounded-lg text-lg dark:bg-opacity-80 dark:bg-white">
        <p class="font-semibold mt-1 mr-1 dark:text-slate-950">Metodologías:</p>
        <Line :data="methodologies" :options="options" />
    </div>
</template>
