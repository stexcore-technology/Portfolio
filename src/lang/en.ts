import type { ILang } from "~/types/lang";

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
    },
    "head:home": {
        title: "Portfolio Stexcore",
        description: "StexCore Portfolio A Qwik-powered portfolio showcasing all my projects, highlighting expertise and creativity in development.",
        author: "stexcore",
        keywords: "portfolio, developments, projects, typescript, html, css, qwik, backend, api, cli"
    },
    "head:contact": {
        title: "Contact - Portfolio Stexcore",
        description: "Discover the various methods to contact me through my portfolio. Find options like email, social media, and contact forms, designed to make professional communication easy and efficient.",
        author: "stexcore",
        keywords: "portfolio, projects, contact, whatsapp, email, github"
    },
    "head:project:api-engine": {
        title: "Api Engine - Portfolio Stexcore",
        description: "Engine for rapidly developing APIs using Express. This library offers a modular and dynamic approach to managing services, controllers, middlewares, and validation schemas, empowering developers to create robust and scalable APIs effortlessly.",
        author: "stexcore",
        keywords: "portfolio, developments, project, typescript, backend, api, framework, library"
    },
    "head:project:create-stexcore-api": {
        title: "Create Stexcore Api CLI - Portfolio Stexcore",
        description: "A powerful CLI tool to simplify the initialization of API projects in Node.js. Utilizing Express and a scalable project structure, it enables developers to efficiently kick-start robust backend setups.",
        author: "stexcore",
        keywords: "portfolio, developments, project, typescript, backend, api, cli, library"
    },
    "head:project:http-status": {
        title: "Http Status - Portfolio Stexcore",
        description: "A versatile collection of HTTP status codes designed for seamless use in any HTTP framework. Simplifies handling HTTP responses and errors with a user-friendly interface, fully compatible with TypeScript and various frameworks.",
        author: "stexcore",
        keywords: "portfolio, developments, project, typescript, api, http, status, library"
    },
    "head:project:indexed-db": {
        title: "Indexed DB - Portfolio Stexcore",
        description: "A JavaScript library offering a database-like structure for managing browser data. Built on IndexedDB, it simplifies CRUD operations and conditional queries with table-like interactions, strong typing, and data validation for seamless client-side data management.",
        author: "stexcore",
        keywords: "portfolio, developments, project, typescript, javascript, frontend, indexed-db, database, library"
    },
    "head:projects": {
        title: "Projects - Portfolio Stexcore",
        description: "Explore the projects and libraries I'm currently working on. Discover how I leverage my expertise in web development, Docker configurations, and dynamic Excel file generation to create innovative and efficient solutions.",
        author: "stexcore",
        keywords: "portfolio, developments, projects, typescript, html, css, qwik, backend, api, cli"
    }
}

export default lang;