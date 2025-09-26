import { $, type QRL, type Signal, useComputed$, useContext } from "@builder.io/qwik";
import langContext from "~/contexts/lang.context";
import type { ILang, ILangType } from "~/types/lang";

export default function useLang<T extends keyof ILang>(segments: T[]): Signal<Partial<ILang> & { lang_type: ILangType, changeLang: QRL<(newLang: ILangType) => void> }> {
    const context = useContext(langContext);

    const result = useComputed$(() => {
        const result: Partial<ILang> = {};
    
        segments.forEach(segment => {
            const langItem = context.segments[segment];

            if (!langItem) {
                throw new Error("Doesn't exist the segment '" + segment + "' in this context!");
            }

            result[segment] = langItem;
        });

        return {
            ...result,
            lang_type: context.lang_type,
            changeLang: $((newLang: ILangType) => {
                context.changeLang(newLang);
            })
        }
    });

    return result;
}