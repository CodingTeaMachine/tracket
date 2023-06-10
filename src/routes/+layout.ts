import type { LayoutLoad } from './$types'
import type { Locales } from '$i18n/i18n-types'
import { loadLocaleAsync } from '$i18n/i18n-util.async'
import { setLocale } from '$i18n/i18n-svelte'

export const load: LayoutLoad<{ locale: Locales }> = async ({ data: { locale, user } }) => {
	await loadLocaleAsync(locale)
	setLocale(locale)

	// pass locale to the "rendering context"
	return { locale, user }
}
