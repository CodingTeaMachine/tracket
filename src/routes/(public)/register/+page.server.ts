import { validateEmail, validatePassword, validateRePassword, validateName } from '$lib/validators';
import { fail, redirect } from '@sveltejs/kit';

import type { ActionFailure, Actions } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import { get } from "svelte/store";
import LL from "$i18n/i18n-svelte";
import { ClientStatusCode, RedirectStatusCode } from "$types/HTTP";
import { Routes } from "$lib/routes";

interface RegisterError {
	nameError: string;
	emailError: string;
	passwordError: string;
	rePasswordError: string;
	registrationError: string;
}

type FailureResponse = {
	name: string | null
	email: string | null
	errors: string
}

export const actions: Actions = {
	default: async ({ request }): Promise<ActionFailure<FailureResponse> | null> => {
		const {name, email, password, rePassword} = Object.fromEntries(
			await request.formData(),
		) as Record<string, string>


		const registerError: RegisterError = {
			nameError: validateName(name),
			emailError: validateEmail(email),
			passwordError: validatePassword(password),
			rePasswordError: validateRePassword(password, rePassword),
			registrationError: ''
		};

		if (registerError.nameError || registerError.emailError || registerError.passwordError || registerError.rePasswordError) {
			return fail(ClientStatusCode.BAD_REQUEST, {
				name,
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
					name,
					email,
				}
			})
		} catch (error) {
			registerError.registrationError = get(LL).pages.register.couldNotRegister();

			return fail(ClientStatusCode.BAD_REQUEST, {
				name,
				email,
				errors: registerError
			})
		}

		throw redirect(RedirectStatusCode.FOUND, Routes.LOGIN);
	},
}
