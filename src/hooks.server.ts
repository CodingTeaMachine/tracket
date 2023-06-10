import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors";
import { detectLocale, i18n } from "$i18n/i18n-util";
import { loadAllLocales } from "$i18n/i18n-util.sync";
import { sequence } from "@sveltejs/kit/hooks";
import { auth } from '$lib/server/lucia';
import type { Handle } from "@sveltejs/kit";

loadAllLocales()
const L = i18n()

const handleDetectLocale: Handle = async ({ event, resolve }) => {
	// TODO: get lang from cookie / user setting
	const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request);
	const locale = detectLocale(acceptLanguageHeaderDetector);
	event.locals.locale = locale;
	event.locals.LL = L[locale];

	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', locale) });
};

const handleAuth: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return resolve(event);
}

export const handle = sequence(handleDetectLocale, handleAuth)
