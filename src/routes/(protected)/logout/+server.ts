import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

export const POST: RequestHandler = async ({locals}) => {
	const session = await locals.auth.validate();

	if(session) {
		await auth.invalidateSession(session.sessionId);
		locals.auth.setSession(null);
	}

	throw redirect(302, '/');
}
