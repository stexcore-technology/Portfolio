import { $, component$, noSerialize, Slot, useContextProvider, useStore, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import langContext from "~/contexts/lang.context";
import langService from "~/services/lang.service";
import { ILang, ILangType } from "~/types/lang";

interface ILangProviderProps {
    segments: (keyof ILang)[]
}

export default component$<ILangProviderProps>(({ segments }) => {
    const location = useLocation();
    const segments_loaded = useStore<{[key in keyof ILang]?: ILang[key]}>({});

    // Load segments lang
    useTask$(() => {
        // Load segments into server
        segments.forEach((segmentItem) => {
            const langItem = langService.getLang(String(location.params.lang) as ILangType, segmentItem);
            segments_loaded[segmentItem] = langItem as any;
        });
    });

    // Provider context lang
    useContextProvider(langContext, { segments: segments_loaded });
    
    return (
        <Slot></Slot>
    );
});