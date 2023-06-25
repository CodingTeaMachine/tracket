import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import { Routes } from "$types/routes";

export const POST: RequestHandler = async ({locals}) => {
	const session = await locals.auth.validate();

	if(session) {
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}

	throw redirect(302, Routes.HOME);
}
