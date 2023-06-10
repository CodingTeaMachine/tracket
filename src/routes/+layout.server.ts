import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals: { locale, auth } }) => {
	const { user } = await auth.validateUser();
	return { locale, user }
}
