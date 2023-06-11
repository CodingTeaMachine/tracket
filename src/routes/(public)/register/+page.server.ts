import { validateEmail, validatePassword, validateRePassword, validateUsername } from '$lib/validators';
import { fail, redirect } from '@sveltejs/kit';

import type { ActionFailure, Actions } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import { get } from "svelte/store";
import LL from "$i18n/i18n-svelte";
import { ClientStatusCode, RedirectStatusCode } from "$types/HTTP";
import { Routes } from "$lib/routes";

interface RegisterError {
	usernameError: string;
	emailError: string;
	passwordError: string;
	rePasswordError: string;
	registrationError: string;
}

type FailureResponse = {
	username: FormDataEntryValue | null
	email: FormDataEntryValue | null
	errors: RegisterError
}

export const actions: Actions = {
	default: async ({ request }): Promise<ActionFailure<FailureResponse> | null> => {
		const {username, email, password, rePassword} = Object.fromEntries(
			await request.formData(),
		) as Record<string, string>


		const registerError: RegisterError = {
			usernameError: validateUsername(username),
			emailError: validateEmail(email),
			passwordError: validatePassword(password),
			rePasswordError: validateRePassword(password, rePassword),
			registrationError: ''
		};

		if (registerError.usernameError || registerError.emailError || registerError.passwordError || registerError.rePasswordError) {
			return fail(ClientStatusCode.BAD_REQUEST, {
				username,
				email,
				errors: registerError,
			});
		}

		try {
			await auth.createUser({
				primaryKey: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					username,
					email,
				}
			})
		} catch (error) {
			registerError.registrationError = get(LL).pages.register.couldNotRegister();

			return fail(ClientStatusCode.BAD_REQUEST, {
				username,
				email,
				errors: registerError
			})
		}

		throw redirect(RedirectStatusCode.FOUND, Routes.LOGIN);
	},
}
