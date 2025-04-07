import { ILang, ILangType } from "~/types/lang";
import lang_en from "../lang/en";
import lang_es from "../lang/en";

export default new class LangService {

    constructor() { }

    /**
     * Get lang information
     * @param lang Lang
     * @returns Lang info
     */
    private getLangInfo(lang: ILangType): ILang {
        switch(lang) {
            case "en":
                return lang_en;

            case "es":
                return lang_es;

            default:
                throw new Error("Unknow lang '" + lang + "'");
        }
    }

    /**
     * 
     * @param lang_type Lang Type
     * @param segment Segment lang
     * @returns Segment Lang
     */
    public getLang<T extends keyof ILang>(lang_type: ILangType, segment: T): ILang[T] {
        // Get lang information
        const lang = this.getLangInfo(lang_type);

        // Get lang
        return lang[segment];
    }

    public getPreferredLanguage(acceptLanguage: string): string {
        if (!acceptLanguage) return "en"; // Idioma predeterminado
      
        // Dividir el encabezado en idiomas y prioridades
        const languages = acceptLanguage.split(",").map((lang) => {
          const [language, q] = lang.split(";q=");
          return { language: language.trim()?.split("-")?.[0]?.toLocaleLowerCase(), priority: parseFloat(q) || 1 };
        });
      
        // Ordenar por prioridad descendente
        languages.sort((a, b) => b.priority - a.priority);
      
        // Retornar solo el idioma principal
        return languages[0]?.language || "en";
    };
    
}