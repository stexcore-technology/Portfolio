import { useContext } from "@builder.io/qwik";
import langContext from "~/contexts/lang.context";
import { ILang } from "~/types/lang";

export default function useLang<T extends keyof ILang>(segments: T[]): Partial<ILang> {
    const context = useContext(langContext);
    const result: Partial<ILang> = {};

    segments.forEach(segment => {
        const langItem = context.segments[segment];
        if (!langItem) {
            throw new Error("Doesn't exist the segment '" + segment + "' in this context!");
        }
        result[segment] = langItem;
    });

    return result;
}