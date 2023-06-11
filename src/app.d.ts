// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import {RedirectStatusCode as RedirectEnum} from "$types/HTTP";

/// <reference types="@sveltejs/kit" />
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			//i18n
			locale: import('$i18n/i18n-types').Locales;
			LL: import('$i18n/i18n-types').TranslationFunctions
			//auth
			auth: import('lucia-auth').AuthRequest
		}
		// interface PageData {}
		// interface Platform {}
	}

	/// <reference types="lucia-auth" />
	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth
		type UserAttributes = {
			username: string
			email: string
		};

	}
}

declare module '@sveltejs/kit' {
	interface Redirect extends Error {
		status: RedirectEnum
		location: string;
	}
	interface HttpError extends Error {
		status: number;
		body: App.Error;
	}
}

export {};
