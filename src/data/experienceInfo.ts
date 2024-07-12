import pokereactImage from '@/assets/pokereact.webp'

const experienceInfo = {
    resources: [
        {
            name: "Redy",
            job: "Ingeniero de software",
            location: "Home Office, Monterrey, Nuevo León",
            date: "ene. 2023 - feb. 2024",
            description: "Redy es un producto digital ofrecido bajo la modalidad de software como servicio (SaaS), diseñado para brindar una plataforma integral y fácil de usar para la implementación efectiva de la NOM-035 en los centros de trabajo. Facilita el cumplimiento de las normativas, promoviendo un ambiente laboral saludable y seguro.",
            image: "https://www.redy.mx/redy-logo-default.webp",
            projects: [
                {
                    assigned: "",
                    image: "",
                    name: "Infraestructura.",
                    date: "ene. 2023 - feb. 2024",
                    description:
                        [
                            "Definición y creación de la arquitectura para los ambientes de desarrollo, calidad y producción.",
                            "Variables de entorno, secretos, configuración de dominio (Amplify).",
                            "Aprobación ante AWS de la liberación de los limites para producción de los servicios de SES y SNS."
                        ],
                    technologies: "AWS Console, AWS Support Center",
                },
                {
                    assigned: "",
                    image: "",
                    name: "Desarrollo Back Office para la administración de la plataforma.",
                    date: "ene. 2023 - feb. 2024",
                    description:
                        [
                            "Módulos desarrollados:",
                            "Configuración: Usuarios, Documentos, Imágenes, Módulos, Paquetes, Cupones, Roles y Permisos.",
                            "Administración: Clientes (Módulos, Paquetes, Usuarios, Carga de facturas, Tickets de soporte).",
                            "Ingresos, Capacitación, Blog.",
                            "Monitoreo: Log de movimientos, Log de errores internos, Log de errores plataforma."
                        ],
                    technologies: "Amplify (Hosting), Dynamo (Database), S3 (Storage), SES (Email Delivery), React.js / Typescript, React Router, UseContext, JWT, Material-UI, CodeCommit, Git",
                },
                {
                    assigned: "",
                    image: "",
                    name: "Desarrollo Front Office de la plataforma para los clientes.",
                    date: "ene. 2023 - feb. 2024",
                    description:
                        [
                            "Módulos desarrollados:",
                            "Landing Page, Carrito de compra, Verificación de identidad, Pagos (Stripe, Mercado Pago, Paypal), Confirmación de pago, Login, Recuperación de contraseña.",
                            "Cuenta: Perfil (Gamificación por puntos y moneda digital), Historial de pagos y solicitud de facturas, Compras (Usuarios, DC3, Encuestas, Actualización de paquetes), Administración de usuarios (Altas, Bajas, Cambios . Roles y Permisos).",
                            "Servicios: Capacitación, Envió de encuestas.",
                            "Ayuda: FAQ, Soporte (Tickets)"
                        ],
                    technologies: "Amplify (Hosting), Dynamo (Database), S3 (Storage), SES (Email Delivery), SNS (SMS Delivery), SAM Application Model, API Gateway, Lambda Functions (GO - Golang), SQS (Enqueue), EventBridge (Cron), CloudFront (CDN), Next.js , SSR , React.js , Typescript , Server Actions, zustand, Redux / Redux Toolkit, Node.js api, JWT, Tailwind.css, Responsive Design, Google Recaptcha, Stripe, Mercado Pago, PayPal, CodeCommit, Git",
                },
            ]
        },
        {
            name: "Blueriver formerly Nearshore Technology",
            job: "Ingeniero de software",
            location: "Home Office, Monterrey, Nuevo León",
            date: "may. 2021 - dic 2022",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "Blackbaud",
                    image: pokereactImage,
                    type: "BackOffice",
                    name: "- Portal:",
                    date: "jul. 2002 - dic. 2022",
                    description:
                        [
                            "Desarrollo back office para la administración de los usuarios del portal.",
                            "Desarrollo  front office para la gestión de donaciones de los clientes."
                        ],
                    technologies: ".NET 6, Microservices, Karma / Jasmine, XUnit, Azure DevOps, Entity Framework (EF) Core, Angular, C#,  Azure Microsoft SQL Server, Azure Service Bus, Scaled Agile Framework (SAFe), Git",
                },
                {
                    assigned: "NST",
                    image: pokereactImage,
                    type: "FrontOffice",
                    name: "Appraisal",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "Becton Dickinson",
                    image: pokereactImage,
                    type: "FrontOffice",
                    name: "Becton Dickinson",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                }
            ]
        },
        {
            name: "ONIBEX",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "Accely",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "CEMEX",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "Consiss",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "Totaltech",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "InverCap Afore",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "Best Day Travel",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "InverCap Afore",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "Avantax Consultores",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "CEMEX",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        },
        {
            name: "UANL",
            job: "Ingeniero de software",
            location: "Monterrey, Nuevo León",
            date: "",
            type: "Remoto",
            description: "",
            image: pokereactImage,
            projects: [
                {
                    assigned: "",
                    image: "",
                    type: "BackOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
                {
                    assigned: "",
                    image: "",
                    type: "FrontOffice",
                    name: "Software as a Service Multitenant",
                    date: "",
                    description:
                        ["abc", "def"],
                    technologies: "react,bootstrap,react-bootstrap,i18next,i18next-browser-languagedetector,react-i18next,leaflet,react-leaflet,react-simple-infinite-loading,react-toggle",
                },
            ]
        }
    ]
}

export default experienceInfo