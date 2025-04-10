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
    }
}

export default lang;
