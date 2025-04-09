import { createContextId, QRL } from "@builder.io/qwik";
import { ILang, ILangType } from "~/types/lang";

export interface IContextLang {
    lang_type: ILangType
    segments: {
        [key in keyof ILang]?: ILang[key]
    },
    changeLang: QRL<(lang: ILangType) => void>
}

export default createContextId<IContextLang>("stexcore.portfolio.lang");