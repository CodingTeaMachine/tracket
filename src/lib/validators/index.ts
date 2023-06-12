import { z, ZodError } from 'zod';
import { get } from 'svelte/store'
import LL from '$i18n/i18n-svelte'

export function validatePassword(password: string | null) {
	const locale = get(LL);
	const passwordLocale = locale.inputs.password();
	const MIN_PASSWORD_LENGTH = 8;
	try {
		z
			.string({
				required_error: locale.validation.required({ field: passwordLocale }),
				invalid_type_error: locale.validation.invalid({ field: passwordLocale }),
			})
			.min(MIN_PASSWORD_LENGTH, locale.validation.tooShort({
				field: passwordLocale,
				length: MIN_PASSWORD_LENGTH
			}))
			.parse(password);

		return '';
	} catch (error) {
		if (error instanceof ZodError) return error.errors[0].message;
		else return '';
	}
}

export function validateEmail(email: string | null) {
	const locale = get(LL);
	const emailLocale = locale.inputs.email();
	const MIN_EMAIL_LENGTH = 8;
	try {
		z
			.string({
				required_error: locale.validation.required({ field: emailLocale }),
				invalid_type_error: locale.validation.required({ field: emailLocale }),
			})
			.email({ message: locale.validation.invalid({ field: emailLocale }) })
			.min(MIN_EMAIL_LENGTH, locale.validation.tooShort({ field: emailLocale, length: MIN_EMAIL_LENGTH }))
			.parse(email);

		return '';
	} catch (error) {
		if (error instanceof ZodError) return error.errors[0].message;
		else return '';
	}
}

export function validateName(name: string | null) {
	const locale = get(LL);
	const nameLocale = locale.inputs.email();
	const MIN_NAME_LENGTH = 8;
	try {
		z
			.string({
				required_error: locale.validation.required({ field: nameLocale }),
				invalid_type_error: locale.validation.required({ field: nameLocale })
			})
			.min(MIN_NAME_LENGTH, locale.validation.tooShort({
				field: nameLocale,
				length: MIN_NAME_LENGTH
			}))
			.parse(name);

		return '';
	} catch (error) {
		if (error instanceof ZodError) return error.errors[0].message;
		else return '';
	}
}

export function validateRePassword(originalPassword: string | null, rePassword: string | null) {
	const validatedRePassword = validatePassword(rePassword);

	if (validatedRePassword !== '') return validatedRePassword;

	if (originalPassword !== rePassword) return get(LL).validation.password.dontMatch();

	return '';
}
