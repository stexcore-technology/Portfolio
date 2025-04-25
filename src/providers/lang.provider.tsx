import { $, component$, Slot, useContextProvider, useStore, useTask$ } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";
import langContext, { IContextLang } from "~/contexts/lang.context";
import langService from "~/services/lang.service";
import { ILang, ILangType } from "~/types/lang";

interface ILangProviderProps {
    segments: (keyof ILang)[]
}

export default component$<ILangProviderProps>(({ segments }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const context = useStore<IContextLang>({
        segments: {},
        lang_type: location.params.lang as ILangType,
        changeLang: $((newLang: ILangType) => {
            navigate(location.url.href.replace(`/${location.params.lang}/`, `/${newLang}/`));
        })
    });

    // Load segments lang
    useTask$(({ track }) => {
        track(() => location.params.lang);

        // Load segments into server
        context.lang_type = location.params.lang as ILangType;
        segments.forEach((segmentItem) => {
            const langItem = langService.getLang(
                String(location.params.lang) as ILangType, 
                segmentItem
            );
            context.segments[segmentItem] = langItem as any;
        });
    });

    // Provider context lang
    useContextProvider(langContext, context);
    
    return (
        <Slot></Slot>
    );
});