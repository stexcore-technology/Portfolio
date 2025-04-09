import { component$ } from "@builder.io/qwik";
import { NavSelect } from "../navbar/navbar";
import useLang from "~/hooks/useLang";
import { ILangType } from "~/types/lang";

export default component$(() => {
    const lang = useLang([]);

    return (
        <NavSelect 
            value={lang.value.lang_type} 
            onChange$={(newLang) => {
                lang.value.changeLang(newLang as ILangType);
            }}
            options={[
                {
                    value: "es",
                    item: (
                        <>
                            <img width={16} height={16} src="/icons/es.png"></img>
                            ES
                        </>
                    )
                },
                {
                    value: "en",
                    item: (
                        <>
                            <img width={16} height={16} src="/icons/en.png"></img>
                            EN
                        </>
                    )
                }
            ]}
        ></NavSelect>
    );
});