import { createContextId } from "@builder.io/qwik";
import { ILang } from "~/types/lang";

interface IContextLang {
    segments: {
        [key in keyof ILang]?: ILang[key]
    }
}

export default createContextId<IContextLang>("stexcore.portfolio.lang");