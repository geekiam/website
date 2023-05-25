import { defineNuxtPlugin } from "#app";
import VueFathom from "@ubclaunchpad/vue-fathom";
export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    nuxtApp.vueApp.use(VueFathom, {
        siteID: config.public.fathom_analytics_id,
        settings: {
            url: "https://cdn.usefathom.com/script.js",
            spa: "history",
            excludedDomains: ["localhost"],
        },
    });
});