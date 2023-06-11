import type { ActionFailure, Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { validateEmail, validatePassword } from '$lib/validators';
import { auth } from '$lib/server/lucia';
import { ClientStatusCode, RedirectStatusCode } from "$types/HTTP";
import { get } from "svelte/store";
import LL from "$i18n/i18n-svelte";
import { Routes } from "$lib/routes";

interface LoginError {
	emailError: string,
	passwordError: string,
	loginError: string,
}


export const actions = {
	default: async ({ request, locals }): Promise<ActionFailure<{
		email: string | null,
		errors: LoginError
	}> | null> => {
		const { email, password } = Object.fromEntries(await request.formData()) as Record<string, string>;


		const loginError: LoginError = {
			emailError: validateEmail(email),
			passwordError: validatePassword(password),
			loginError: '',
		};

		if (loginError.emailError || loginError.passwordError) {
			return fail(ClientStatusCode.BAD_REQUEST, {
				email,
				errors: loginError,
			});
		}

		try {
			const key = await auth.useKey('email', email, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch (error) {
			loginError.loginError = get(LL).pages.login.couldNotLogIn();
			return fail(ClientStatusCode.BAD_REQUEST, { email, errors: loginError });
		}

		throw redirect(RedirectStatusCode.FOUND, Routes.HOME);
	},
} satisfies Actions;
