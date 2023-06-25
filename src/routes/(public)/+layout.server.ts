import { redirect } from "@sveltejs/kit";
import { RedirectStatusCode } from "$types/HTTP";
import type { LayoutServerLoad } from './$types';
import { Routes } from "$types/routes";

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (session) {
		throw redirect(RedirectStatusCode.FOUND, Routes.HOME)
	}
}
