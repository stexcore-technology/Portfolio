import { ILang } from "~/types/lang";

const lang: ILang = {
    "home": {
        header: "stexcore",
        phrase: "Mi objetivo al desarrollar no es tener dependencias excesivas."
    },
    "contact": {
        contacts: {
            whatsapp: {
                label: "Whatsapp",
                tooltip: "Contáctame por Whatsapp"
            },
            email: {
                label: "Correo",
                tooltip: "Contáctame por correo electrónico"
            },
            github: {
                label: "Github",
                tooltip: "Contáctame por Github"
            }
        }
    },
    "projects": {
        header: {
            title: "Proyectos",
            description: "Algunos de los proyectos son del trabajo y otros son en mi tiempo libre.",
        },
        projects: {
            "indexed-db": {
                date_creation: "13 de diciembre de 2024",
                package_name: "@stexcore/indexed-db",
                description: "Simplifica la gestión de datos en el lado del cliente al proporcionar una biblioteca tipada en JavaScript sobre IndexedDB. Permite operaciones CRUD y consultas condicionales con una estructura similar a una base de datos."
            },
            "http-status": {
                date_creation: "1 de abril de 2025",
                package_name: "@stexcore/http-status",
                description: "Una biblioteca limpia y compatible con TypeScript de códigos de estado HTTP para gestionar respuestas y errores en cualquier framework HTTP."
            },
            "api-engine": {
                date_creation: "1 de abril de 2025",
                package_name: "@stexcore/api-engine",
                description: "Motor API impulsado por Express para el desarrollo modular y escalable de backends. Gestiona servicios, controladores, middlewares y esquemas de manera dinámica."
            },
            "create-stexcore-api": {
                date_creation: "2 de abril de 2025",
                package_name: "create-stexcore-api",
                description: "Herramienta CLI para la inicialización rápida de proyectos API en Node.js. Utiliza Express y una estructura escalable para configurar un backend optimizado."
            }
        }
    },
    "navbar:home": {
        navbar: {
            back: {
                tooltip: "Regresar"
            },
            contact: {
                label: "Contacto",
                tooltip: "Contáctame"
            },
            projects: {
                label: "Proyectos",
                tooltip: "Todos los proyectos"
            }
        }
    },
    "project:api-engine": {
        title: "api-engine",
        description: "Motor para desarrollar rápidamente APIs utilizando Express como base."
    },
    "project:create-stexcore-api": {
        title: "create-stexcore-api",
        description: "Una herramienta CLI poderosa diseñada para simplificar la inicialización de proyectos API en Node.js."
    },
    "project:http-status": {
        title: "http-status",
        description: "Una colección de códigos de estado HTTP para uso general en cualquier framework HTTP."
    },
    "project:indexed-db": {
        title: "indexed-db",
        description: "Esta biblioteca de JavaScript simplifica la gestión de datos en el navegador al crear una capa sobre IndexedDB para operaciones CRUD y consultas."
    },
    "head:home": {
        title: "Portafolio Stexcore",
        description: "Portafolio de StexCore impulsado por Qwik, que muestra todos mis proyectos, destacando experiencia y creatividad en desarrollo.",
        author: "stexcore",
        keywords: "portafolio, desarrollos, proyectos, typescript, html, css, qwik, backend, api, cli"
    },
    "head:contact": {
        title: "Contacto - Portafolio Stexcore",
        description: "Descubre las diversas formas de contactarme a través de mi portafolio. Encuentra opciones como correo electrónico, redes sociales y formularios de contacto, diseñados para facilitar la comunicación profesional de manera eficiente.",
        author: "stexcore",
        keywords: "portafolio, proyectos, contacto, whatsapp, correo, github"
    },
    "head:project:api-engine": {
        title: "Motor API - Portafolio Stexcore",
        description: "Motor para desarrollar APIs rápidamente utilizando Express. Esta biblioteca ofrece un enfoque modular y dinámico para gestionar servicios, controladores, middlewares y esquemas de validación, permitiendo a los desarrolladores crear APIs robustas y escalables sin esfuerzo.",
        author: "stexcore",
        keywords: "portafolio, desarrollos, proyecto, typescript, backend, api, framework, biblioteca"
    },
    "head:project:create-stexcore-api": {
        title: "Crear API Stexcore CLI - Portafolio Stexcore",
        description: "Una herramienta CLI poderosa para simplificar la inicialización de proyectos API en Node.js. Utilizando Express y una estructura de proyecto escalable, permite a los desarrolladores iniciar configuraciones de backend robustas de manera eficiente.",
        author: "stexcore",
        keywords: "portafolio, desarrollos, proyecto, typescript, backend, api, cli, biblioteca"
    },
    "head:project:http-status": {
        title: "Estado HTTP - Portafolio Stexcore",
        description: "Una colección versátil de códigos de estado HTTP diseñada para un uso perfecto en cualquier framework HTTP. Simplifica el manejo de respuestas y errores HTTP con una interfaz fácil de usar, totalmente compatible con TypeScript y diversos frameworks.",
        author: "stexcore",
        keywords: "portafolio, desarrollos, proyecto, typescript, api, http, estado, biblioteca"
    },
    "head:project:indexed-db": {
        title: "Indexed DB - Portafolio Stexcore",
        description: "Una biblioteca de JavaScript que ofrece una estructura similar a una base de datos para gestionar datos del navegador. Construida sobre IndexedDB, simplifica operaciones CRUD y consultas condicionales con interacciones similares a tablas, tipificación estricta y validación de datos para una gestión de datos en el cliente sin problemas.",
        author: "stexcore",
        keywords: "portafolio, desarrollos, proyecto, typescript, javascript, frontend, indexed-db, base de datos, biblioteca"
    },
    "head:projects": {
        title: "Proyectos - Portafolio Stexcore",
        description: "Explora los proyectos y bibliotecas en los que estoy trabajando actualmente. Descubre cómo aprovecho mi experiencia en desarrollo web, configuraciones Docker y generación dinámica de archivos Excel para crear soluciones innovadoras y eficientes.",
        author: "stexcore",
        keywords: "portafolio, desarrollos, proyectos, typescript, html, css, qwik, backend, api, cli"
    }
}

export default lang;
