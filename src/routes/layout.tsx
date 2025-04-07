import { component$, Slot } from "@builder.io/qwik";
import { ILangType } from "~/types/lang";
import type { RequestHandler } from "@builder.io/qwik-city";
import langService from "~/services/lang.service";

const languages: ILangType[] = ["es", "en"];

export const onRequest: RequestHandler = async ({ request, redirect, url, params }) => {

  // Validate current lang  
  if(!languages.includes(String(params.lang) as ILangType)) {
    // Accept language
    const acceptLanguage = request.headers.get("accept-language");
    // preferred
    const lang = langService.getPreferredLanguage(acceptLanguage || "");
    
    throw redirect(302, `/${lang}${url.pathname}`);
  }
};

export const onGet: RequestHandler = async ({ cacheControl }) => {
  
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return <Slot />;
});
