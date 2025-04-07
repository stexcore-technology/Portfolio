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
        }
    },
    "navbar:home": {
        navbar: {
            contact: {
                label: "Contacto",
                tooltip: "Contáctame"
            },
            projects: {
                label: "Proyectos",
                tooltip: "Todos los proyectos"
            }
        }
    }
}

export default lang;
