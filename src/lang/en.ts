import { ILang } from "~/types/lang";

const lang: ILang = {
    "home": {
        header: "stexcore",
        phrase: "My goal when developing is not to have excessive dependencies."
    },
    "contact": {
        contacts: {
            whatsapp: {
                label: "Whatsapp",
                tooltip: "Contact me with Whatsapp"
            },
            email: {
                label: "Email",
                tooltip: "Contact me with Email"
            },
            github: {
                label: "Github",
                tooltip: "Contact me with Github"
            }
        }
    },
    "projects": {
        header: {
            title: "Projects",
            description: "Some of the projects are from work and some are on my own time.",
        },
        projects: {
            "indexed-db": {
                date_creation: "December 13, 2024",
                package_name: "@stexcore/indexed-db",
                description: "Simplifies client-side data management by providing a typed JavaScript library on top of IndexedDB. Allows CRUD operations and conditional queries with a database-like structure."
            },
            "http-status": {
                date_creation: "April 1, 2025",
                package_name: "@stexcore/http-status",
                description: "A clean, TypeScript-compatible library of HTTP status codes for managing responses and errors in any HTTP framework."
            },
            "api-engine": {
                date_creation: "April 1, 2025",
                package_name: "@stexcore/api-engine",
                description: "Express-powered API engine for modular and scalable backend development. Manage services, controllers, middlewares, and schemas dynamically."
            },
            "create-stexcore-api": {
                date_creation: "April 2, 2025",
                package_name: "create-stexcore-api",
                description: "CLI tool for fast API project initialization in Node.js. Uses Express and a scalable structure for streamlined backend setup."
            }
        }
    },
    "navbar:home": {
        navbar: {
            back: {
                tooltip: "Go to back"
            },
            contact: {
                label: "Contact",
                tooltip: "Contact me"
            },
            projects: {
                label: "Projects",
                tooltip: "All projects"
            }
        }
    },
    "project:api-engine": {
        title: "api-engine",
        description: "Engine for rapidly developing APIs using Express under the hood."
    },
    "project:create-stexcore-api": {
        title: "create-stexcore-api",
        description: "A powerful CLI tool designed to streamline the initialization of API projects in Node.js."
    },
    "project:http-status": {
        title: "http-status",
        description: "A collection of HTTP status codes for general use in any HTTP framework."
    },
    "project:indexed-db": {
        title: "indexed-db",
        description: "This JavaScript library simplifies browser data management by layering over IndexedDB for CRUD operations and queries."
    }
}

export default lang;