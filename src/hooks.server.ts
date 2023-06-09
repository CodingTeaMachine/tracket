import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors";
import { detectLocale, i18n } from "$i18n/i18n-util";
import type { Handle } from "@sveltejs/kit";
import { loadAllLocales } from "$i18n/i18n-util.sync";

loadAllLocales()
const L = i18n()

export const handle = (async ({ event, resolve }) => {
	// TODO: get lang from cookie / user setting
	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	const locale = detectLocale(acceptLanguageHeaderDetector);
	event.locals.locale = locale;
	event.locals.LL = L[locale];

	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });
}) satisfies Handle;
