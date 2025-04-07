import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import langService from "~/services/lang.service";
import { ILang, ILangType } from "~/types/lang";

interface ILangProviderProps {
    lang: ILangType,
    segments: (keyof ILang)[]
}

export default component$<ILangProviderProps>(({ segments }) => {
    const location = useLocation();
    // const segments_loaded = useSignal<>()

    // useTask$(() => {
    //     langService.getLang(String(location.params.lang) as ILangType, );
    // });
    
    return <></>
});