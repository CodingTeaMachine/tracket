import { redirect } from "@sveltejs/kit";
import { Redirect } from "$types/HTTP";
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();

	if (!session) {
		throw redirect(Redirect.FOUND, '/')
	}
}
